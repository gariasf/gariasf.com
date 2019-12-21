import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import { Container } from '@material-ui/core';

export default function Index(): JSX.Element {
  return (
    <Container maxWidth="lg"><GalleryGrid /></Container>
  )
}