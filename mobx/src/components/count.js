import React, { useState, useEffect } from 'react';

function Count () {
    const [num, setNum] = useState(0)
    useEffect(() => {
        document.title = `u clicked ${num} times`
    })
    return (
        <div>
            <div>u clicked {num} times</div>
            <button onClick={() => {setNum(num + 1)}}>点我</button>
        </div>
    )
}

export default Count