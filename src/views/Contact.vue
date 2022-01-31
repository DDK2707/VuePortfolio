<template>
    <div class="container">
        <div class="row-mb-40">
            <h2>Contact Me:</h2>
        </div>
        <div class="row">
            <div class="col-md-6 mt-40">
                <div class="btn-group-vertical d-flex align-items-center">
                    <a href="https://www.linkedin.com/in/dale-de-kock-b26567206/" target="_blank" class="btn" id="smbutton"><i class="bi bi-linkedin"></i></a>
                    <a href="https://www.linkedin.com/in/dale-de-kock-b26567206/" target="_blank" class="btn" id="smbuttonhover">LinkedIn</a>
                    <a href="https://github.com/DDK2707" target="_blank" class="btn" id="smbutton"><i class="bi bi-github"></i></a>
                    <a href="https://github.com/DDK2707" target="_blank" class="btn" id="smbuttonhover">Github</a>
                    <a href="https://www.instagram.com/dalecraig27/" target="_blank" class="btn" id="smbutton"><i class="bi bi-instagram"></i></a>
                    <a href="https://www.instagram.com/dalecraig27/" target="_blank" class="btn" id="smbuttonhover">Instagram</a>
                    <a href="https://www.booksie.com/portfolio-view/dale-craig-242038" target="_blank" class="btn" id="smbutton"><i class="bi bi-book"></i></a>
                    <a href="https://www.booksie.com/portfolio-view/dale-craig-242038" target="_blank" class="btn" id="smbuttonhover">Booksie</a>
                </div>
            </div>
            <div class="col-md-6">
                <form class="text-center" action="/action_page.php>" method="POST">
                <fieldset style="color:black;">
                    <legend>Your Info</legend>
                    <label for="enter your name"> Name:</label><br>
                    <input type="text" id="Name" name="Name" placeholder="John Doe" autofocus><br>
                    <label for="enter telephone number"> Telephone:</label><br>
                    <input type="tel" id="Telephone" name="Telephone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"><br>
                    <label for="enter email address">E-mail Address</label><br>
                    <input type="email" id="E-mail" name="E-mail" placeholder="example@email.com" multiple required><br>
                </fieldset>
                <fieldset style="color:black;">
                    <legend>Your Message</legend>
                    <label for="enter message"></label><br>
                    <input type="text" id="Enter message" name="Enter message" placeholder="Your message here"><br>
                </fieldset>
                <input type="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#smbutton {
  outline: black solid;
  border-radius: 50px;
  margin: 17px;
  width: 50px;
}

#smbuttonhover {
  display: none;
}

#smbutton .bi {
  margin-left: -25px;
}

#smbutton:hover{
  background-color: rgb(218, 105, 105);
  color: black;
  transition: 0.5s;
} 

#smbuttonhover:hover {
    display: flex;
}
</style>