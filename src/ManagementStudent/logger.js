
function logger(reducer){
    return (prevState, action) => {
        console.group(action.type)

        console.log('Prev State' , prevState)
        console.log('Action' , action)

        const nextSate = reducer(prevState, action)

        console.log('Next State', nextSate)
        console.groupEnd()
        return nextSate
    }
}

export default logger