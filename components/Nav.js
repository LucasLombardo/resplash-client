import React from 'react';
import Link from 'next/link';

export const Nav = () => (
    <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/page-2"><a>Page 2</a></Link>
    </nav>
);
