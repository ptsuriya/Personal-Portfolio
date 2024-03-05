"use client"

import { useEffect } from "react"

import React from 'react'

const BootstrapClient = () => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    },[]);

  return null;
}

export default BootstrapClient
