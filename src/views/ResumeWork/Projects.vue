<template>
    <h1>My Projects</h1>
    <div v-for="project of projects" :key="project.id" class="projectcontainer">
    <div  v-if="projects" class="row">
        <div class="col-lg-4">
            <div class="projectcard">
                <div class="face front-face"> <img src={{project.image}} alt="" class="profile">
                    <div class="pt-3 text-uppercase name"> {{project.title}} </div>
                    <div class="designation"> {{project.languages}} </div>
                </div>
                <div class="face back-face"> <span class="fas fa-quote-left"></span>
                    <div class="testimonial"> {{project.description}} <br> {{project.github}} <br> {{project.netlify}}</div> <span class="fas fa-quote-right"></span>
                </div>
            </div>
        </div>
  </div>
</div>
</template>

<script>
export default{
    data(){
        return {
            projects: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/projects')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.projects = data
            })
            .catch(err => console.log(err.message))
    }
}

</script>

<style>
.projectcontainer {
    align-self: center;
    margin-left: 690px;
    width: 87%;
}
.projectcontainer-item .col-lg-4 {
    display: flex;
    justify-content: center;
}

.projectcard {
    width: 400px;
    height: 400px;
    transform-style: preserve-3d;
    perspective: 500px;
    border: none;
    background-color:  rgb(121, 110, 110, 0.6);
    margin: 15px;
}

.projectcard .face {
    position: absolute;
    color:  rgb(121, 110, 110, 0.6);
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    background:  rgb(121, 110, 110, 0.6);
    transform-style: preserve-3d;
    transition: 0.5s;
    backface-visibility: hidden;
    border-top: 1px solid  rgb(121, 110, 110, 0.6);
    border-left: 1px solid  rgb(121, 110, 110, 0.6)
}

.projectcard .face.front-face,
.projectcard .face.back-face {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.projectcard .face.front-face .profile {
    width: 150px;
    height: 150px;
    object-fit: cover
}

.projectcard .face.front-face .name {
    letter-spacing: 2px;
    color: red;
}

.projectcard .face.front-face .designation {
    font-size: 0.8rem;
    color: black;
    letter-spacing: 0.8px
}

.projectcard .face.face.back-face .testimonial {
  color: red;
}

.projectcard:hover .face.front-face {
    transform: rotateY(180deg)
}

.projectcard .face.back-face {
    position: absolute;
    background:  rgb(121, 110, 110, 0.6);
    transform: rotateY(180deg);
    padding: 20px 30px;
    text-align: center;
    user-select: none
}

.projectcard .face.back-face .fa-quote-left {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 1.2rem
}

.projectcard .face.back-face .fa-quote-right {
    position: absolute;
    bottom: 35px;
    right: 25px;
    font-size: 1.2rem
}

.projectcard:hover .face.back-face {
    transform: rotateY(360deg)
}

@media screen and (max-width: 955px) {
    .projecttcontainer {
        margin-left: 68px;
    }
}
</style>