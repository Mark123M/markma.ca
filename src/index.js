import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './Portfolio';
import Home from './Home'
import { ThemeProvider } from '@emotion/react';
import mytheme from './theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { allPosts } from './Allposts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/game",
    element: <Portfolio experiencePosts={allPosts.game.experiencePosts} projectPosts={allPosts.game.projectPosts} />
  },
  {
    path: "/general",
    element: <Portfolio experiencePosts={allPosts.general.experiencePosts} projectPosts={allPosts.general.projectPosts} />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={mytheme} >
    <RouterProvider router = {router} />
  </ThemeProvider>
    
);