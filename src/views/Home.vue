<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <img src="../assets/Images/sidebariconphoto.jpg" alt="" class="headerphoto">
            </div>
            <div class="col-sm-6">
                <div class="typewriter">
                    <h4>Hi there!</h4>
                    <h3>I'm Dale de Kock</h3>
                    <h3>Writer and Aspiring Web Developer</h3>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.typewriter{
    overflow: hidden;
    border-right: .15em black;
    white-space: nowrap;
    font-size: 1.6rem;
    width: 0;
    animation: typing 2s steps(58, end)forwards;
    justify-content: center;
}

@keyframes typing {
    from { width: 0}
    to { width: 100%;}
}

@keyframes blink-caret {
    from, to {border-color: transparent;}
    50% {border-color: black;}
}

.container {
    margin-top: 50px;
}
.headerphoto {
    width: 100%;
    height: 725px;
    border-radius: 15%;
}
</style>