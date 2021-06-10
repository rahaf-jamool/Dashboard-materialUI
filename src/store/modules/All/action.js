import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);
let lang = window.localStorage.getItem('lang');

export const loadCategories = ({ commit }) => {
    axios
        .get(`/api/categories/getAll?lang=${lang}`)
        .then((res) => {
            console.warn('Categories :', res.data.Category);
            let Categories = res.data.Category;
            commit('SET_Categories', Categories);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadCategory = ({ commit }, CategoryID) => {
    axios
        .get(`/api/categories/getById/${CategoryID}?lang=${lang}`)
        .then((res) => {
            console.warn('CategoryID :', res.data.Category);
            let CategoryID = res.data.Category;
            commit('SET_CategoryID', CategoryID);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const deleteCategory = ({ commit }, items) => {
    axios.put(
        `http://edalili.e-dalely.com/public/api/categories/trash/${items.id}`,
        commit('Delete_Category', items.id)
    );
};
export const loadSections = ({ commit }) => {
    axios
        .get(`/api/sections/getAll?lang=${lang}`)
        .then((res) => {
            console.warn('Sections :', res.data.Section);
            let sections = res.data.Section;
            commit('SET_Sections', sections);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadSection = ({ commit }, SectionID) => {
    axios
        .get(`/api/sections/getById/${SectionID}?lang=${lang}`)
        .then((res) => {
            console.warn('SectionID :', res.data);
            let SectionID = res.data;
            commit('SET_SectionID', SectionID);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadBrands = ({ commit }) => {
    axios
        .get(`/api/brands/getAll?lang=${lang}`)
        .then((res) => {
            console.warn('Brands :', res.data.Brand);
            let Brands = res.data.Brand;
            commit('SET_Brands', Brands);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadBrand = ({ commit }, BrandID) => {
    axios
        .get(`/api/brands/getById/${BrandID}?lang=${lang}`)
        .then((res) => {
            console.warn('BrandID :', res.data.Brand);
            let BrandID = res.data.Brand;
            commit('SET_BrandID', BrandID);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const deleteBrand = ({ commit }, items) => {
    axios.put(
        `http://edalili.e-dalely.com/public/api/brands/trash/${items.id}`,
        commit('Delete_Brand', items.id)
    );
};
export const loadProducts = ({ commit }) => {
    axios
        .get(`/api/products/getAll?lang=${lang}`)
        .then((res) => {
            console.warn('Product :', res.data.Products);
            let Product = res.data.Products;
            commit('SET_Products', Product);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadProduct = ({ commit }, ProductID) => {
    axios
        .get(`/api/products/getById/${ProductID}?lang=${lang}`)
        .then((res) => {
            console.warn('productById :', res.data.product);
            let ProductID = res.data.product;
            commit('SET_ProductID', ProductID);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
