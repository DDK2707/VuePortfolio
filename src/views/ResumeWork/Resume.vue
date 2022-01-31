<template>
    <h1 class="sectiontitle">Education</h1>
    <div v-if="education">
        <div v-for="edu of education" :key="edu.id" class="education">
            <h2>{{edu.title}}</h2>
            <h4>{{edu.details}}</h4>
        </div> 
    </div>
    <h1 class="sectiontitle">Work Experience</h1>
    <div v-if="jobs">
        <div v-for="job of jobs" :key="job.id" class="jobs">
            <h2>{{job.title}}</h2>
            <h4>{{job.details}}</h4>
        </div>
    </div>

    <h1 class="sectiontitle">Skills and Languages</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2> Hard Skills </h2>
            </div>
            <div class="col-md-6">
                <h2>Languages</h2>
            </div>
        </div>
    </div>

    <h1 class="sectiontitle">Testimonials</h1>
      <div class="testcontainer">
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="face front-face"> <img src="Testimonials/alextest.jpg" alt="" class="profile">
                    <div class="pt-3 text-uppercase name"> Alex Sexwale </div>
                    <div class="designation">Lecturer</div>
                </div>
                <div class="face back-face"> <span class="fas fa-quote-left"></span>
                    <div class="testimonial"> Dale is creative and focused. He is goal driven, which will help him succeed in his life dreams. </div> <span class="fas fa-quote-right"></span>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="face front-face"> <img src="Testimonials/Cameron3.JPG" alt="" class="profile">
                    <div class="pt-3 text-uppercase name"> Cameron Bowers </div>
                    <div class="designation">Colleague</div>
                </div>
                <div class="face back-face"> <span class="fas fa-quote-left"></span>
                    <div class="testimonial"> Dale is determined and hardworking. He is a great web developer and produces high quality work. He is extremely inspiring and also really knowledgeable </div> <span class="fas fa-quote-right"></span>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="face front-face"> <img src="Testimonials/amaarahtest2.jpg" alt="" class="profile">
                    <div class="pt-3 text-uppercase name"> Amaarah January</div>
                    <div class="designation">Colleague</div>
                </div>
                <div class="face back-face"> <span class="fas fa-quote-left"></span>
                    <div class="testimonial"> Dale is a confident, hard-working and intelligent person. He always finds ways to be unique and creative with whatever he works on. He is a natural born leader with the ability to also listen to the input of others.</div> <span class="fas fa-quote-right"></span>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
              <div class="face front-face"> <img src="Testimonials/kyletest2.png" alt="" class="profile">
                  <div class="pt-3 text-uppercase name"> Kyle McBryne </div>
                  <div class="designation">Colleague</div>
              </div>
              <div class="face back-face"> <span class="fas fa-quote-left"></span>
                  <div class="testimonial"> Dale is a very solicitous person,caring about his peers while being hard-working and determined in the process. </div> <span class="fas fa-quote-right"></span>
              </div>
          </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
            <div class="face front-face"> <img src="Testimonials/DalarnoTest.jpg" alt="" class="profile">
                <div class="pt-3 text-uppercase name"> Dalarno van Rooi </div>
                <div class="designation">Colleague</div>
            </div>
            <div class="face back-face"> <span class="fas fa-quote-left"></span>
                <div class="testimonial"> Dale, a being easily described as Dedicated, Kind, Hardworking. I can tell you for nothing at all that you've never seen somebody as unique as he, he will amaze you and change your understanding about what it is to be a friend as well as being a complete 'beast' in the work environment. His addition to any team will uplift the workspace undeniably. </div> <span class="fas fa-quote-right"></span>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
          <div class="face front-face"> <img src="Testimonials/yaasientest.jpg" alt="" class="profile">
              <div class="pt-3 text-uppercase name"> Yaasien Salaam </div>
              <div class="designation">Colleague</div>
          </div>
          <div class="face back-face"> <span class="fas fa-quote-left"></span>
              <div class="testimonial"> Dale is a determined developer, always dedicated, and willing to adapt and learn new things, he also helps his colleagues when and where he can. if you looking for a focused and perfectionist developer, Dale is the developer for you. </div> <span class="fas fa-quote-right"></span>
          </div>
      </div>
  </div>
  
    </div>
</div>
</template>
x
<script>
export default {

    data(){
        return {
            education: null, 
            jobs: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/education')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.education = data
            })
            .catch(err => console.log(err.message))
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                this.jobs = data
            })
            .catch(err => console.log(err.message))
    }, 
}

</script>

<style>
.sectiontitle {
    color: rgb(248, 35, 35);
    margin: 50px;
}

.testcontainer {
    align-self: center;
    margin: 0px 0px 0px 200px;
    width: 87%;
}
.testcontainer-item .col-lg-4 {
    display: flex;
    justify-content: center;
}

.card {
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    perspective: 500px;
    border: none;
    background-color:  rgb(121, 110, 110, 0.6);
    margin: 15px;
}

.card .face {
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

.card .face.front-face,
.card .face.back-face {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.card .face.front-face .profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover
}

.card .face.front-face .name {
    letter-spacing: 2px;
    color: red;
}

.card .face.front-face .designation {
    font-size: 0.8rem;
    color: black;
    letter-spacing: 0.8px
}

.card .face.face.back-face .testimonial {
  color: red;
}

.card:hover .face.front-face {
    transform: rotateY(180deg)
}

.card .face.back-face {
    position: absolute;
    background:  rgb(121, 110, 110, 0.6);
    transform: rotateY(180deg);
    padding: 20px 30px;
    text-align: center;
    user-select: none
}

.card .face.back-face .fa-quote-left {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 1.2rem
}

.card .face.back-face .fa-quote-right {
    position: absolute;
    bottom: 35px;
    right: 25px;
    font-size: 1.2rem
}

.card:hover .face.back-face {
    transform: rotateY(360deg)
}
</style>