import React from 'react'
import '../styles/Quote.css'
import LoadingIndicator from './Loading.jsx'

function Quote({quote, onDelete}) {
    const formattedDate = new Date(quote.uploaded_at).toLocaleDateString("en-US")
    return <div className='quote-container'>
        <p className='quote-body'>'{quote.body}'</p>
        <p className='quote-author'>-{quote.author}</p>
        <p className='quote-date'>{quote.date}</p>
        <p className='quote-uploaded'>Uploaded at: {formattedDate}</p>
        {loading && <LoadingIndicator />}
        <button className='delete-button' onClick={() => onDelete(quote.id)}>Delete</button>
    </div>
}

export default Quote