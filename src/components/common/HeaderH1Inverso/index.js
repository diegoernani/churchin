import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeaderH1Inverso.module.scss'

/**
* @author zilahir
* @function Header
* */

const HeaderH1Inverso = props => {
	const { text, className } = props
	return (
		<h1 className={className}>
			{text}
		</h1>
	)
}

HeaderH1Inverso.defaultProps = {
	className: styles.mainH1Inverso,
}

HeaderH1Inverso.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default HeaderH1Inverso
