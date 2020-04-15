import React from 'react';
import NavbarFooter from '../../components/common/NavbarFooter';
import SectionWrapper from '../../components/common/SectionWrapper';
import Discovery from '../../components/Discovery';

const DiscoveryScreen = () => {
    return (
        <>
            <SectionWrapper>
                <Discovery />
            </SectionWrapper>
            <NavbarFooter />
        </>
    );
}

export default DiscoveryScreen;