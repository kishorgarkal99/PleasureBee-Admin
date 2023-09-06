
export default interface UI {
    id: string,
    title: string,
    description?: string,
    showOrientation?: boolean
    content: string[] | []
    contentVisible?: boolean[]
}

