import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `   
    <svg width="45" height="44" viewBox="0 0 45 44">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.3">
            <g id="⟶-[Skeleton]-Preloader-#2" transform="translate(-662.000000, -116.000000)">
                <g id="Group" transform="translate(-0.000000, 76.000000)">
                    <g id="navbar">
                        <g id="search" transform="translate(659.000000, 36.000000)">
                            <g id="group" transform="translate(25.000000, 25.500000) scale(-1, 1) translate(-25.000000, -25.500000) translate(3.000000, 4.000000)" stroke="#1D1D26" stroke-width="2">
                                <ellipse id="oval" cx="24.4118953" cy="19.5454545" rx="18.5295162" ry="18.5454545"></ellipse>
                                <path d="M10.252996,33.6714876 L0.660643179,42.3989253" id="line" stroke-linecap="round"></path>
                            </g>
                            <rect id="bounds" x="0" y="0" width="50" height="50"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;
