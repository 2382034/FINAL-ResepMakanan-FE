import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

// Layouts
import BaseLayout from "./layouts/BaseLayout";
import RootLayout from "./layouts/RootLayout";

// Core & Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


// --- Import Recipes Pages ---
import Recipes from "./pages/Recipes";
import AddRecipes from "./pages/AddRecipes";
import RecipesDetail from "./pages/RecipesDetail";
import EditRecipes from "./pages/EditRecipes";
// --- End Import Recipes Pages ---

// --- Import Posting Pages ---
import Postings from "./pages/Postings";
import AddPosting from "./pages/AddPosting";
import PostingDetail from "./pages/PostingDetail";
import EditPosting from "./pages/EditPosting";
// --- End Import Posting Pages ---

// Utils & Providers
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { AuthProvider } from "./utils/AuthProvider";
import Note from "./pages/Note";
import AddNote from "./pages/AddNote";
import NoteDetail from "./pages/NoteDetail";
import EditNote from "./pages/EditNote";


const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Public Layout */}
        <Route path="/" element={<BaseLayout />}>
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>

        {/* Private Layout */}
        <Route path="/" element={<RootLayout />}>
          {/* Home */}
          <Route
            index // Default route for '/' under RootLayout
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          
          {/* --- Recipes Routes --- */}
          <Route
            path="postings" // Route to list all recipes
            element={
              <PrivateRoute>
                <Postings />
              </PrivateRoute>
            }
          />
          <Route
            path="add-posting" // Route to add a new recipe
            element={
              <PrivateRoute>
                <AddPosting />
              </PrivateRoute>
            }
          />
          <Route
            path="postings/:id" // Route to view recipe details
            element={
              <PrivateRoute>
                <PostingDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="postings/edit/:id" // Route to edit a recipe
            element={
              <PrivateRoute>
                <EditPosting />
              </PrivateRoute>
            }
          />
          {/* --- End Recipes Routes --- */}

          {/* --- Recipes Routes --- */}
          <Route
            path="recipes" // Route to list all recipes
            element={
              <PrivateRoute>
                <Recipes />
              </PrivateRoute>
            }
          />
          <Route
            path="add-recipe" // Route to add a new recipe
            element={
              <PrivateRoute>
                <AddRecipes />
              </PrivateRoute>
            }
          />
          <Route
            path="recipes/:id" // Route to view recipe details
            element={
              <PrivateRoute>
                <RecipesDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="recipes/edit/:id" // Route to edit a recipe
            element={
              <PrivateRoute>
                <EditRecipes />
              </PrivateRoute>
            }
          />
          {/* --- End Recipes Routes --- */}

                    {/* Notes Routes */}
                    <Route
            path="notes"
            element={
              <PrivateRoute>
                <Note />
              </PrivateRoute>
            }
          />
          <Route
            path="add-note"
            element={
              <PrivateRoute>
                <AddNote />
              </PrivateRoute>
            }
          />
          <Route
            path="note/:id" // Kept original path for consistency
            element={
              <PrivateRoute>
                <NoteDetail />
              </PrivateRoute>
            }
          />
           <Route
            path="edit-note/:id" // Kept original path for consistency
            element={
              <PrivateRoute>
                <EditNote />
              </PrivateRoute>
            }
          />

        </Route> {/* End RootLayout Routes */}
      </Route> // End Base Route
    )
  );

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;