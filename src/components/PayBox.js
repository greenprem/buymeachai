import React from 'react';
import './PayBox.css';

const PayBox  = () => {
    return (
    <div class="container">
        <div class="title">Buy Prem a chai</div>
        <div class="coffee-selection">
            <h1>☕</h1>
            <p id="times"> x</p>
            <div class="options">
                <span class="active">1</span>
                <span>3</span>
                <span>5</span>
                <span id="editable" contenteditable="true">1</span>
            </div>
        </div>
        <div class="textarea-container">
            <textarea rows="3" placeholder="Say something nice..."></textarea>
        </div>
        <button class="support-button">Support $3</button>
    </div>

    )
}

export default PayBox;
