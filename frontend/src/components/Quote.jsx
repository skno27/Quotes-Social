import React from 'react'
import '../styles/Quote.css'

function Quote({ quote, onDelete }) {
    const formattedDate = new Date(quote.uploaded_at).toLocaleDateString("en-US")
    const quoteColor = {
        backgroundColor: (!quote.color) ? 'tan' : `${quote.color}`,
    }
    return (
        <div className='quote-container' style={quoteColor}>
            <p className='quote-body'>'{quote.body}'</p>
            <p className='quote-author'>-{quote.author}</p>
            <p className='quote-date'>{quote.date}</p>
            <p className='quote-uploaded'>Uploaded at: {formattedDate}</p>
            <button className='delete-button' onClick={() => onDelete(quote.id)}>
                Delete
            </button>
        </div>
    )
}

export default Quote