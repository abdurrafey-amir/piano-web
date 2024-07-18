Tone.start()
const synth = new Tone.Synth().toDestination()


function playnote(note) {
    synth.triggerAttackRelease(`${note}4`, '8n')
    document.getElementById(note).style.background = '#142F44'
    document.getElementById('body').style.background = '#F6683B'
    setTimeout(() => {
        document.getElementById(note).style.background = 'white'
        document.getElementById('body').style.background = '#142F44'
    }, 200)
}

document.onkeydown = function (e) {
    e = e || window.event
    var key = e.which || e.keyCode
    if (key === 83) {
        playnote('C')
    }
    else if (key === 68) {
        playnote('D')
    }
    else if (key === 70) {
        playnote('E')
    }
    else if (key === 71) {
        playnote('F')
    }
    else if (key === 72) {
        playnote('G')
    }
    else if (key === 74) {
        playnote('A')
    }
    else if (key === 75) {
        playnote('B')
    }
}