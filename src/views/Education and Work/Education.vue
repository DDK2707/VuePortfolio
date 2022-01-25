<template>
    <h1>Education</h1>
    <div v-if="education.length">
    <div v-for="education of educaiton" :key="education.id" class="education">
        <router-link :to="{name:'JobDetails', params: {id: education.id}}">
        <h2>{{education.title}}</h2>
        </router-link>
    </div> 
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            education: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/education')
            .then(res => res.json())
            .then(data => this.education = data)
            .catch(err => console.log(err.message))
    }
}

</script>

<style>

</style>