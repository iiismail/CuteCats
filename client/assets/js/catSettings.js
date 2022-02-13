
var colors = Object.values(allColors())

var defaultDNA = {
    "facecolor" : 10,
    "earColor" : 13,
    "bodyColor" : 96,
    "tailColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.facecolor);
  $('#dnamouth').html(defaultDNA.earColor);
  $('#dnaeyes').html(defaultDNA.bodyColor);
  $('#dnaears').html(defaultDNA.tailColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
}

// Changing cat colors
$('#facecolor').change(()=>{
    var colorVal = $('#facecolor').val()
    faceColor(colors[colorVal],colorVal)
})

$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earColor(colors[colorVal],colorVal)
})

$('#bodycolor').change(()=>{
  var colorVal = $('#bodycolor').val()
  bodyColor(colors[colorVal],colorVal)
})

$('#tailcolor').change(()=>{
  var colorVal = $('#tailcolor').val()
  tailColor(colors[colorVal],colorVal)
})
