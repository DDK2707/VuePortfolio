<template>
    <div class="container" id="homecontainer">
        <div class="row">
            <div class="col-sm-6">
                <img src="../assets/Images/sidebariconphoto.jpg" alt="" class="headerphoto">
            </div>
            <div class="col-sm-6">
                <div class="typewriter">
                    <h3>Hi there!</h3>
                    <h1>I'm Dale de Kock</h1>
                    <h2>Writer and Aspiring Web Developer</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.typewriter{
    overflow: hidden;
    border-right: .15em black;
    white-space: nowrap;
    font-size: 1.6rem;
    /* width: 0; */
    animation: typing 2s steps(58, end)forwards;
    justify-content: center;
    margin-top: 250px;
}

@keyframes typing {
    from { width: 0}
    to { width: 100%;}
}

@keyframes blink-caret {
    from, to {border-color: transparent;}
    50% {border-color: black;}
}

#homecontainer {
    margin-top: 50px;
}
.headerphoto {
    width: 100%;
    height: 725px;
    border-radius: 15%;
} 

@media screen and (max-width: 955px) {
    .headerphoto {
        height: 500px
    }

    .typewriter {
        margin-top: 50px;
    }
}
</style>