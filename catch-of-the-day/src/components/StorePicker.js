import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    /* One way of binding the function to the component: */
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event) {
        event.preventDefault();
        console.log('You Changed the URL');
        // first grab the text from the box
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        // second we're going to transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            /* Second way of binding the function to the component: */
            // <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
            /* Third way of binding the function to the component: */
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
                <button type="submit">Visit Store &rarr;</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;
