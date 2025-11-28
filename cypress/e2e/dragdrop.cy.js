import DragDropPages from '../pages/dragdropPages'

describe('Drag and Drop Circles', () => {
    const dragdropPage = new DragDropPages()

    beforeEach(() => {
        dragdropPage.visit()
    })

    it('Drap the ball verify is dropped', () => {
        dragdropPage.tapDragRedBall()
        dragdropPage.verifyRedDrop()
    })

    it('Drag green ball verify is dropped', () => {
        dragdropPage.tapDragGreenBall()
        dragdropPage.verifyGreenDrop()
    })

    it('Drag blue ball verify is dropped', () => {
        dragdropPage.tapDragBlueBall()
        dragdropPage.verifyBlueDrop()
    })
})