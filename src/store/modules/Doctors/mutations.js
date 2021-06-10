export const SET_Doctors = (state, doctors) => {
    state.doctors = doctors;
};
export const SET_DoctorID = (state, DoctorID) => {
    state.DoctorID = DoctorID;
};
export const SET_DoctorTrashed = (state, doctorstrashed) => {
    state.doctorstrashed = doctorstrashed;
};
export const Delete_Doctor = (state, itemsId) => {
    let doctors = state.doctors.filter((v) => v.id != itemsId);
    state.doctors = doctors;
};
export const Trash_Doctor = (state, itemsId) => {
    /*  */
    let doctorstrashed = state.doctorstrashed.filter((v) => v.id != itemsId);
    state.doctorstrashed = doctorstrashed;
};
