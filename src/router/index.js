import { createRouter , createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Categories from "../pages/Categories.vue";
import Products from "../pages/Products.vue";
import Contact from "../pages/Contact.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import Profile from "../pages/Profile.vue";
import NotFound from "../pages/NotFound.vue";
import ProductDetails  from "../pages/ProductDetails.vue";
import CategoryProducts from "../pages/CategoryProducts.vue";



const routes =[
    { path:'/' , name:'home' , component:Home },
    { path:'/about' , name:'about' , component:About },
    { path:'/categories' , name:'categories' , component:Categories },
    { path:'/categories/:id' , name:'category-products' , component:CategoryProducts , props:true },
    { path:'/products' , name:'products' , component:Products },
    { path: "/products/:id", component: ProductDetails },
    { path:'/contact' , name:'contact' , component:Contact },
    { path:'/login' , name:'login' , component:Login },
    { path:'/signup' , name:'signup' , component:Signup },
    { path:'/profile' , name:'profile' , component:Profile },
    { path:'/:pathMatch(.*)*' , name:'not-found' , component:NotFound },
]

const router = createRouter({
    history: createWebHistory() ,
    routes
});

export default router