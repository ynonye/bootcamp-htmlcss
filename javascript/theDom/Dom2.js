<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible"
content="IE=edge" />
<meta name="viewport"
content="width=device-width, initial-scale=1.0" />
<title>Modifying Elements</title>
</head>
<style>
h1 {
color: red;
}
p {
font-size: 20px;
}
</style>
<body>
<h1>
I hate the color red. If only I was blue and I
can sing "Im blue da da di da da daaa"
</h1>
<p class="paragraph">I wish I was bigger</p>
<div id="description">
Select me and change my display property
</div>
</body>
<script>
    document.getElementById("h1").style.color = "blue"; 
    document.getElementById("p").size.width = "30px";
    document.getElementById("description").display.property = "inline-block";
    document.body.style.backgroundColor = "green";
    document.querySelector('title').textContent = "finished the ex!!!";

</script>