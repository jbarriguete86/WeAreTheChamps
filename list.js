export function renderList(data){
    return data.map(item => {
        const container = document.createElement('div')

        const reviewParagraph = document.createElement('p')
        reviewParagraph.textContent = item.review
        reviewParagraph.classList.add('text')
        container.appendChild(reviewParagraph)

        const fromParagraph = document.createElement('p')
        fromParagraph.textContent = `from: ${item.from}`
        fromParagraph.classList.add('subtitle')
        container.appendChild(fromParagraph)

        const toParagraph = document.createElement('p')
        toParagraph.textContent = `to: ${item.to}`
        toParagraph.classList.add('title')
        container.appendChild(toParagraph)

        return container;
    });
}