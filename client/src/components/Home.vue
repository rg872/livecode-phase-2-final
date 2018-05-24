<template>
    <div>
        <navbar/>
        <div class="row">
            <div class="col">

            </div>
            <div class="col">
                
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
