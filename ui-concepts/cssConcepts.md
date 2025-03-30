Flexbox: 
    https://css-tricks.com/snippets/css/a-guide-to-flexbox/
Box-sizing:
    https://css-tricks.com/box-sizing/


<p id="a" class="b c">Hello World!</p>
<style>

.b.c{
    color: red;
}
#a{
    color:black;
}
p.b.c{
    color:green;
}
</style>
<div><p id="a" class="b c">Hello World!</p></div>
#a{
    color:black;
}

div .b.c{
    color: red;
}
p.b.c{
    color:green;
}

<section>
<div class="item item1"></div>
<div class="item item2"></div>
<div class="item item3"></div>
<div class="item item4"></div>
</section>

<style>
    .item{
        display: inline-block;
        border: 1px solid #ccc;
        width: 100px;
        height: 100px;
        position:relative;
    }
    .item2{
        left: 50px;
    }
</style>