<template>
  <div>
    <navbar/>
    <div class="row">
      <div class="col-7">
        <div class="card" style="width: 18rem;" v-for="(book, index) in books" :key="index">
          <img class="card-img-top" :src="book.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{book.uploader.name}}</p>
            <a class="btn btn-primary" @click="selectedBook = book">See Detail</a>
          </div>
        </div>
      </div>
      <div class="col-5"  v-if="selectedBook !== null">
        <div class="card">
          <div class="card-header">
            Uploaded By: {{ selectedBook.uploader.name }}
          </div>
          <img class="card-img-top" :src="selectedBook.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ selectedBook.title }}</h5>
            <p class="card-text">{{ selectedBook.description }}</p>
            <a class="btn btn-warning" @click="selectedBook = null">Close</a>
            <a class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Review</a>
          </div>
        </div>

        <div class="card" v-for="(review, index) in selectedBook.reviews" :key="index">
          <div class="card-body">
            <h5 class="card-title">{{ review.reviewer.name }}</h5>
            <p class="card-text">{{ review.detail }}</p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" id="exampleModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Review</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</template>


<script>
import navbar from '../components/NavBar'
import { mapState } from 'vuex'

export default {
    components: {
        navbar
    },
    data () {
        return {
            selectedBook: null
        }
    },
    methods: {

    },
    created () {
        if(localStorage.getItem('token')) {
            this.$store.dispatch('getAllBooks')
            .then(() => {
                
            })
            .catch(err => {
                alert(err.message)
            })
        } else {
            this.$router.push('/register')
        }
    },
    computed: {
        books () {
            return this.$store.state.books
        }
    }
}
</script>

<style>

</style>
