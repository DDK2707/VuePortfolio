<template>
  <div class="container" id="skillscontainer">
			<div class="skillset">

				<div class="skill-lockup">
					<span class="skill-name mb">HTML</span><span class="skill-status">90%</span>
					<span class="skill-bar">
						<span class="skill-level  html"></span>
					</span>
				</div><!-- communication end -->

				<div class="skill-lockup mr">
					<span class="skill-name mb">CSS</span><span class="skill-status">80%</span>
					<span class="skill-bar">
						<span class="skill-level css"></span>
					</span>
				</div><!-- planning end -->

				<div class="skill-lockup">
					<span class="skill-name mb">MySQL</span><span class="skill-status">60%</span>
					<span class="skill-bar">
						<span class="skill-level mysql"></span>
					</span>
				</div><!-- learning end -->

				<div class="skill-lockup mr">
					<span class="skill-name mb">JavaScript</span><span class="skill-status">60%</span>
					<span class="skill-bar">
						<span class="skill-level javascript"></span>
					</span>
				</div><!-- programming end -->

				<div class="skill-lockup">
					<span class="skill-name mb">VueJS</span><span class="skill-status">50%</span>
					<span class="skill-bar">
						<span class="skill-level vuejs"></span>
					</span>
				</div><!-- visual-design end -->
<!-- 
				<div class="skill-lockup mr">
					<span class="skill-name mb">UX Design</span><span class="skill-status">10%</span>
					<span class="skill-bar">
						<span class="skill-level ux-design"></span>
					</span>
				</div> -->
			</div>
		</div>
</template>

<script>
export default {

}
</script>

<style>
body {
	background: #ededed;
	font-family: 'Lato', Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
}

#skillscontainer {
	max-width: 960px;
	width: 100%;
	margin: 0 auto;
}

.skillset {
	margin-top: 100px;
    margin-left: 100px;
}

.skill-lockup {
	max-width: 450px;
	width: 100%;
	float: left;
	margin-right: 40px;
}

.mr {
	margin-right: 0;
}

.mb {
	margin-bottom: 5px;
}

.skill-info {
	display: block;
	margin-bottom: 20px;
}

.skill-name {
	float: left;
	color: black;
}

.skill-status {
	float: right;
	color: black;
	font-size: 1em;
}
.skill-bar {
	display: block;
	max-width: 450px;
	width: 100%;
	height: 5px;
	background: #e3e3e5;
	clear: both;
	margin: 20px 0;
}

.skill-level {
	display: table;
	height: 5px;
}
.html, .css,
.mysql, .javascript,
.vuejs {
	background: rgb(218, 105, 105);
}

.html {
	width: 90%;
	-webkit-animation: html 2.5s linear;
	animation: html 2.5s linear;
}

.css {
	width: 80%;
	-webkit-animation: css 2.5s linear;
	animation: css 2.5s linear;
}

.mysql {
	width: 60%;
	-webkit-animation: mysql 2.5s linear;
	animation: mysql 2.5s linear;
}

.javascript {
	width: 60%;
	-webkit-animation: javascript 2.5s linear;
	animation: javascript 2.5s linear;
}

.vuejs {
	width: 50%;
	-webkit-animation: vuejs 2.5s linear;
	animation: vuejs 2.5s linear;
}


/*-----------------------
	  	Animations 
-------------------------*/ 
@-webkit-keyframes html {
	from { width: 0%; }
	to { width: 90%; }
}

@keyframes html {
	from { width: 0%; }
	to { width: 90%; }
}

/*-----------------------
	Planning Animation 
-------------------------*/
@-webkit-keyframes css {
	from { width: 0%; }
	to { width: 80%; }
}

@keyframes css {
	from { width: 0%; }
	to { width: 80%; }
}

/*-----------------------
	Learning Animation 
-------------------------*/ 
@-webkit-keyframes mysql {
	from { width: 0%; }
	to { width: 60%; }
}

@keyframes mysql {
	from { width: 0%; }
	to { width: 60%; }
}

/*-----------------------
  Programming Animation 
-------------------------*/ 
@-webkit-keyframes javascript {
	from { width: 0%; }
	to { width: 60%; }
}

@keyframes javascript {
	from { width: 0%; }
	to { width: 60%; }
}

/*-----------------------
Visual-Design Animation  
-------------------------*/ 
@-webkit-keyframes vuejs {
	from { width: 0%; }
	to { width: 50%; }
}

@keyframes vuejs {
	from { width: 0%; }
	to { width: 50%; }
}
/*-----------------------
	  Media queries
-------------------------*/ 


@media screen and (max-width: 955px) {
	.skillset {
		padding: 20px;
	}
	.skill-lockup {
		max-width: 700px;
		width: 100%;
		float: none;
		margin: 0 auto;
	}

	.skill-bar {
		max-width: 700px;
		width: 100%;
	}
}
</style>