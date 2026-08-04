function floppinatorInfoShow() {
      document.getElementById("message-box-title").innerHTML = "Floppinator"
    document.getElementById("message-box-body").innerHTML = "\
    Floppinator is a basic piece of generative software designed with rudimentary artificial intelligence \
    that re-creates a (mostly nonsensical) conversation between my <a href='https://discord.com'>Discord</a> friend and I. \
    Floppinator is trained locally from thousands of our Discord messages to replicate the types of conversations \
    we'd usually have. It tries to mimick our style of conversation and sentence patterns. It also takes into \
    account frequently-used acronyms (XD, lol, <i>etc.</i>) and topics that we've discussed.<br><br> \
    Naturally, and fortunately, a lot of the conversations it generates are practically nonsensical or illogical, and\
    can sometimes make abrupt decisions. It doesn't have good memory and will often forget any messages \
    before the previous.<br><br>\
    The project was built in <a href='https://python.org'>Python</a>, with the <a href='https://unsloth.ai'>Unsloth</a> module \
    as the fundamental part of the project. The module allows you to easily fine-tune an existing model using the \
    <a href='https://en.wikipedia.org/wiki/Retrieval-augmented_generation'>RAG</a> technique.<br> \
    I know that artificial intelligence is all the rage nowadays, though there has apparently been a \"decline\" in the \
    industry. I think the idea is interesting, but all these data centers might have an effect on the planet...<br><br> \
    The list of conversation are presented in a series of bullet-points. Feel free to check them out!"
    document.getElementById("message-box-background").style.display = "block";
    document.getElementById("message-box").style.display = "block";
}
function floppinatorInfoHide() {
    document.getElementById("message-box-background").style.display = "none";
    document.getElementById("message-box").style.display = "none";
}