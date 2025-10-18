import React from "react"


function Tags({tags}) {
    return (
        <div className="tags-group">
            {tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>)
            )}
        </div>
    )
}

export default Tags