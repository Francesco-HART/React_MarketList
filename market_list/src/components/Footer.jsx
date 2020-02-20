import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer>
                    <p>@copyrith 2020 | <Link to="/about">About</Link> | Timantène</p>
                </footer>
            </div>
        );
    }
}
