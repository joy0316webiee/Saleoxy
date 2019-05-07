import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // path: "/",
      path: "/wizard",
      name: "wizard",
      redirect: "login",
      component: () => import("@/layouts/Wizard.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/pages/wizard/Login.vue")
        },
        {
          path: "/addfacebook",
          name: "addfacebook",
          component: () => import("@/pages/wizard/AddFacebook.vue")
        },
        {
          path: "/addcalendar",
          name: "addcalendar",
          component: () => import("@/pages/wizard/AddGoogleCalendar.vue")
        },
        {
          path: "/addappointment",
          name: "addappointment",
          component: () => import("@/pages/wizard/AddAppointment.vue")
        },
        {
          path: "/complete",
          name: "complete",
          component: () => import("@/pages/wizard/Complete.vue")
        }
      ]
    },
    {
      // path: "/dashboard",
      path: "/",
      name: "dashboard",
      redirect: "calendar",
      component: () => import("@/layouts/Dashboard.vue"),
      children: [
        {
          path: "/calendar",
          name: "calendar",
          component: () => import("@/pages/dashboard/Calendar.vue")
        },
        {
          path: "/appointments",
          name: "appointments",
          component: () => import("@/pages/dashboard/Appointments.vue")
        },
        {
          path: "/setaccount",
          name: "setaccount",
          component: () => import("@/pages/dashboard/SettingAccount.vue")
        },
        {
          path: "/setholiday",
          name: "setholiday",
          component: () => import("@/pages/dashboard/SettingHoliday.vue")
        },
        {
          path: "/setfacebook",
          name: "setfacebook",
          component: () => import("@/pages/dashboard/SettingFacebook.vue")
        }
      ]
    }
  ]
});
