import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeaderH2Inverso.module.scss'

/**
* @author martincserep
* @function Header
* */

const HeaderH2Inverso = props => {
	const { text, className } = props
	return (
		<h2 className={className}>
			{text}
		</h2>
	)
}

HeaderH2Inverso.defaultProps = {
	className: styles.mainH2Inverso,
}

HeaderH2Inverso.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default HeaderH2Inverso
