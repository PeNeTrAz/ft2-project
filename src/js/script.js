const char = createSorcerer('Mago')
const monster = createMegaGoblin()

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)