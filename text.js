//var text = document.getElementById("text-input").value;

var text = `US President-elect Donald Trump says there must be no further releases of detainees from the Guantanamo Bay detention centre in Cuba.
He said those left were "extremely dangerous people and should not be allowed back onto the battlefield".
President Barack Obama had vowed to close the jail during his tenure and has transferred out many prisoners.
Around 60 inmates remain and the White House said later on Tuesday it expected more transfers before 20 January.
Mr Trump had opposed Mr Obama's closure plan during the presidential election campaign.
Last February he said: "This morning, I watched President Obama talking about Gitmo, right, Guantanamo Bay, which by the way, which by the way, we are keeping open.
"Which we are keeping open... and we're gonna load it up with some bad dudes, believe me, we're gonna load it up."`

$(document).ready(function() {
  $("#sub").click(function(e) {
    e.preventDefault();
    function calcAvg(array) {
      var total = 0;
      for(var i = 0; i < array.length; i++) {
        total += array[i];
        }
        return total / array.length;
      }
    var sentLength = [];
    var wordLength = [];
    var sentences = text.split(".");
    var textSplit = [];
    for (i=0; i<sentences.length; i++) {
      sentLength.push(sentences[i].length)
      var words = sentences[i].split(' ');
      for (j=0; j<words.length; j++) {
        textSplit.push(words[j]);
        wordLength.push(words[j].length);
      };
    }
    var sentAvg = calcAvg(sentLength).toFixed(2);
    var wordAvg = calcAvg(wordLength).toFixed(2);
    var uniqueWords = Array.from(new Set(textSplit));

    $(".results").append(`<res>Word count: </res><br>` );
    $(".results").append(`<num>${textSplit.length}</num><br>`);

    $(".results").append(`<res>Unique word count: </res><br>` );
    $(".results").append(`<num>${uniqueWords.length}</num><br>`);

    $(".results").append(`<res>Average sentence length in characters: </res> <br>` );
    $(".results").append(`<num>${sentAvg}</num><br>`);

    $(".results").append(`<res>Average word length in characters: </res> <br>` );
    $(".results").append(`<num>${wordAvg}</num><br>`);

  });
}
)
