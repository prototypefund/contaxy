import React, { useCallback, useEffect, useState } from 'react';

// import { useTranslation } from 'react-i18next';

import './App.css';
import {
  SELECTED_PROJECT_LOCAL_STORAGE_KEY,
  authApi,
  extensionsApi,
  usersApi,
} from '../../services/contaxy-api';
import { mapExtensionToAppPage } from '../../utils/app-pages';
import AppBar from '../../components/AppBar/AppBar';
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import ContentContainer from '../../app/routing/ContentContainer';
import GlobalStateContainer from '../../app/store';

function App() {
  // const { t } = useTranslation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [additionalAppDrawerItems, setAdditionalAppDrawerItems] = useState([]);
  const {
    activeProject,
    setActiveProject,
    loadProjects,
    setUser,
    projects,
    user,
    projectExtensions,
    setProjectExtensions,
    setIsAuthenticated,
    isAuthenticated,
    setOauthEnabled,
  } = GlobalStateContainer.useContainer();
  const onDrawerClick = useCallback(() => setDrawerOpen(!isDrawerOpen), [
    isDrawerOpen,
  ]);

  useEffect(() => {
    // Check whether the user is logged in currently (the auth cookie - if existing - is sent to the endpoint which returns a user object when a valid token exists and an error otherwise)
    usersApi
      .getMyUser()
      .then((res) => {
        setUser(res);
        setIsAuthenticated(true);
      })
      .catch(() => {
        setUser(null);
        setIsAuthenticated(false);
      });
  }, [isAuthenticated, setUser, setIsAuthenticated]);

  useEffect(() => {
    if (!user) return;
    loadProjects();
  }, [user, loadProjects]);

  useEffect(() => {
    if (activeProject.id || !projects || projects.length === 0) return;

    const prevSelectedProjectId = window.localStorage.getItem(
      SELECTED_PROJECT_LOCAL_STORAGE_KEY
    );

    if (prevSelectedProjectId) {
      const previouslySelectedProject = projects.find(
        (project) => project.id === prevSelectedProjectId
      );
      if (previouslySelectedProject) {
        setActiveProject(previouslySelectedProject);
      } else {
        // This project is not accessible anymore
        window.localStorage.removeItem(SELECTED_PROJECT_LOCAL_STORAGE_KEY);
      }
    } else {
      const userProject = projects.find((project) => project.id === user.id);
      if (!userProject) return;
      setActiveProject(userProject);
      window.localStorage.setItem(
        SELECTED_PROJECT_LOCAL_STORAGE_KEY,
        userProject.id
      );
    }
  }, [activeProject, setActiveProject, projects, user]);

  useEffect(() => {
    // Check whether external authentication is activated
    authApi
      .oauthEnabled()
      .then((res) => {
        setOauthEnabled(res === '1');
      })
      .catch(() => {
        setOauthEnabled(false);
      });
  }, [isAuthenticated, setOauthEnabled]);

  useEffect(() => {
    if (!activeProject.id) return;
    extensionsApi
      .listExtensions(activeProject.id)
      .then((res) => setProjectExtensions(res))
      .catch(() => {});
  }, [activeProject, setProjectExtensions, user]);

  useEffect(() => {
    setAdditionalAppDrawerItems(
      projectExtensions.map((extension) => mapExtensionToAppPage(extension))
    );
  }, [projectExtensions]);

  const [appDrawerElement, setAppDrawerElement] = useState(false);

  useEffect(() => {
    const newState = !isAuthenticated ? (
      false
    ) : (
      <AppDrawer
        isAdmin
        open={isDrawerOpen}
        additionalPages={additionalAppDrawerItems}
        handleDrawerClose={onDrawerClick}
      />
    );
    setAppDrawerElement(newState);
  }, [
    isAuthenticated,
    setAppDrawerElement,
    additionalAppDrawerItems,
    isDrawerOpen,
    onDrawerClick,
  ]);

  return (
    <div className="App">
      <AppBar isAuthenticated={isAuthenticated} onDrawerOpen={onDrawerClick} />
      {appDrawerElement}
      <main className="main">
        <ContentContainer
          isAuthenticated={isAuthenticated}
          additionalPages={additionalAppDrawerItems}
        />
      </main>
      <div id="snackbar-container" />
    </div>
  );
}

export default App;
