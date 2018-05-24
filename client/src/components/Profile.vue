<template>
    <div>
        <navbar/>
        <div class="row">
            <div class="col">
                <button class="btn btn-primary" @click="menuNow = 'see'">See My Books</button>
                <button class="btn btn-primary" @click="menuNow = 'create'">Insert New Book</button>
            </div>
            <div class="col">
                <div v-if="menuNow === 'see'">
                    <div class="card" style="width: 18rem;" v-for="(book, index) in books" :key="index" v-if="book.uploader._id === currentId">
                    <img class="card-img-top" :src="book.image" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">{{ book.description }}</p>
                        <a class="btn btn-danger" @click="deleteBook(book)">Delete</a>
                        <a class="btn btn-primary" @click="updateBook(book)">Update</a>
                    </div>
                    </div>
                </div>
                <div v-else-if="menuNow === 'create'">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Book Title</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter title" v-model="createTitle">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Book Description</label>
                        <textarea class="form-control" placeholder="Enter Description" v-model="createDescription"></textarea>
                    </div>
                    <div class="form-check">
                        <input type="file" accept="image/*" @change="saveImage">
                    </div>
                    <button class="btn btn-primary" @click="createBook">Submit</button>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../components/NavBar'

export default {
    components: {
        navbar
    },
    data () {
        return {
            currentId: localStorage.getItem('id'),
            menuNow: 'see',
            createTitle: '',
            createDescription: '',
            createImage: null
        }
    },
    computed: {
        books () {
            return this.$store.state.books
        }
    },
    methods: {
        deleteBook (book) {
            this.$store.dispatch('deleteBook', book)
            .then(() => {
                alert('succes delete book')
            })
            .catch(err => {
                alert(err.message)
            })
        },
        updateBook (book) {

        },
        createBook () {
             let newBook = new FormData()
            try {                
                newBook.append('title', this.createTitle)            
                newBook.append('description', this.createDescription)
                newBook.append('image', this.createImage)
            } catch (err) {
                alert(err.message)
            }
            
            this.createTitle = ''
            this.createDescription = ''
            this.createImage = null

            this.$store.dispatch('createBook', newBook)
            .then(() => {
                alert('succes insert new book')
            })
            .catch(err => {
                alert(err.message)
            })

        },
        saveImage(event) {
            var input = event.target            
            
            if (input.files && input.files[0]) {
                console.log(input.files[0])                
                this.createImage = input.files[0]
            }
        }
    }
}
</script>

<style>

</style>
