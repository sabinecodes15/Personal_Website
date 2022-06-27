class NavButton extends React.Component {
    render(page_type) {
        return (
            <button type="button" class="btn btn-primary">
                {page_type}
            </button>
        );
    }
}

import { createRoot } from 'react-dom/Client';
const container = document.querySelector(".nav-btn");
const label = container.ariaLabel;
const root = createRoot(container);
root.render(<NavButton page_type={label} />, container);