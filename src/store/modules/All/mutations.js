export const SET_Categories = (state, Categories) => {
    state.Categories = Categories;
};
export const SET_CategoryID = (state, CategoryID) => {
    state.CategoryID = CategoryID;
};
export const Delete_Category = (state, itemsId) => {
    let Categories = state.Categories.filter((v) => v.id != itemsId);
    state.Categories = Categories;
};
export const SET_Sections = (state, sections) => {
    state.sections = sections;
};
export const SET_SectionID = (state, SectionID) => {
    state.SectionID = SectionID;
};
export const SET_Brands = (state, Brands) => {
    state.Brands = Brands;
};
export const SET_BrandID = (state, BrandID) => {
    state.BrandID = BrandID;
};
export const Delete_Brand = (state, itemsId) => {
    let Brands = state.Brands.filter((v) => v.id != itemsId);
    state.Brands = Brands;
};
export const SET_Products = (state, Product) => {
    state.Product = Product;
};
export const SET_ProductID = (state, ProductID) => {
    state.ProductID = ProductID;
};
//
