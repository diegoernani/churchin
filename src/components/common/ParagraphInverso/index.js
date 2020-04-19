import React from 'react'
import PropTypes from 'prop-types'

import styles from './ParagraphInverso.module.scss'

/**
* @author
* @function Paragraph
* */

const ParagraphInverso = props => {
	const { text, className } = props
	return (
		<pInverso className={className}>
			{text}
		</pInverso>
	)
}

ParagraphInverso.defaultProps = {
	className: styles.paragraphInverso,
}

ParagraphInverso.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}


export default ParagraphInverso
