import DragDropLocators from '../locators/dragdropLocators'

class DragDropPages {
    visit() {
        cy.visit(Cypress.env('baseUrlDropCricles'))
    }

    // draggable
    dragBall(ballLocator) {
        cy.get(ballLocator)
            .drag(DragDropLocators.drop.dropElement)
    }

    verifyDropped() {
        cy.get(DragDropLocators.drop.dropElement)
            .should('be.visible')
    }

    // actions
    tapDragRedBall() {
        this.dragBall(DragDropLocators.drag.dragRedElement)
    }

    tapDragGreenBall() {
        this.dragBall(DragDropLocators.drag.dragGreenElement)
    }

    tapDragBlueBall() {
        this.dragBall(DragDropLocators.drag.dragBlueElement)
    }

    // verify
    verifyRedDrop() {
        this.verifyDropped()
    }

    verifyGreenDrop() {
        this.verifyDropped()
    }

    verifyBlueDrop() {
        this.verifyDropped()
    }
}

export default DragDropPages