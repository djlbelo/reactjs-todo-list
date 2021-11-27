import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    

    return (
        <header 
            className='header'>
            <h1>
                {title}
            </h1>
            <Button 
                color = {showAdd ? 'crimson' : 'steelblue'}
                text={showAdd ? 'Fechar' : 'Adicionar'}
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: "Tarefas",
}

/**Header.PropTypes = {
    title: PropTypes.string.isRequired,
}**/

/**CSS in JS
const headingStyle = {
    color: 'red',
    backgroundColor:'black'
}**/

export default Header
