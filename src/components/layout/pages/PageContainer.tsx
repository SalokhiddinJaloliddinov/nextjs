import React from 'react';

import styles from './PageContainer.module.scss'

type PageContainerProps = {
    children?: JSX.Element | JSX.Element[] | string
}

const PageContainer:React.FC<PageContainerProps> = ({children}) =>  {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default PageContainer;