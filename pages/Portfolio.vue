<template>
    <b-container fluid>
        <b-navbar toggleable="lg" variant="default">
            <!-- Navbar content here -->
            <b-navbar-brand href="javascript:void(0)">
                <b-img src="https://go.team/wp-content/uploads/2022/05/goteam-logo-dark.png"
                    class="d-inline-block align-top" fluid alt="Go Team" width="150px" height="150px">
                </b-img>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="javascript:void(0)" class="text-secondary">Careers</b-nav-item>
                    <b-nav-item href="javascript:void(0)">Find your role</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <div class="position-relative my-4">

                        <input type="text" placeholder="Search" class="search-portfolio" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="search-portfolio--icon">
                            <path
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </div>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <span class="mr-auto small">Ian Mark Tabaranza</span>
                            <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"
                                class="mr-auto"></b-avatar>

                            <!-- <div class="d-flex align-items-center">
                                <div>
                                    <small class="mb-1" style="font-size: 12px;"> Ian Mark Tabaranza</small>
                                </div>
                                <div class="ml-2" style="font-size: 11px;color:red">
                                    ianmark.tabz@gmail.com
                                </div>
                                <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
                            </div> -->
                        </template>
                        <b-dropdown-item href="javascript:void(0)">Profile</b-dropdown-item>
                        <b-dropdown-item href="javascript:void(0)">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-container fluid>
            <b-row class="flow-xl">
                <b-list-group class="bd-sidebar border-bottom-0 col-md-3 col-xl-2 col-12 border-transparent">
                    <b-list-group-item v-b-toggle.collapse-1 class="d-flex align-items-center border-transparent zoomable"
                        @click='toggleCollapse' :class="{ 'blue-purple-color': isCollapsed }" href="javascript:void(0)">
                        <BIconPerson class="mr-2 icon" :class="{ 'blue-purple-color': isCollapsed }"></BIconPerson>
                        <small class="mr-auto" :class="{ 'blue-purple-color': isCollapsed }">Profile</small>
                        <BIconChevronRight class="pull-right" v-if='!isCollapsed' />
                        <BIconChevronDown v-else :class="{ 'blue-purple-color': isCollapsed }" class="pull-right" />
                    </b-list-group-item>
                    <b-collapse id="collapse-1">
                        <b-list-group-item class="border-transparent zoomable" href="javascript:void(0)">
                            <BIconFileEarmarkText class="mr-2 icon"></BIconFileEarmarkText>
                            <small class='mr-auto'>
                                Resume / CV
                            </small>
                        </b-list-group-item>
                        <b-list-group-item class="border-transparent zoomable" href="javascript:void(0)"><small>
                                <BIconFileBarGraph class="mr-2 icon"></BIconFileBarGraph>Assessment
                            </small></b-list-group-item>
                        <b-list-group-item class="zoomable"
                            :class="isCollapsed ? 'underlined-border' : 'border-transparent'"
                            href="javascript:void(0)"><small>
                                <BIconCollectionPlay class="mr-2 icon"></BIconCollectionPlay>Video Script
                            </small></b-list-group-item>
                    </b-collapse>
                    <b-list-group-item class="d-flex align-items-center border-transparent zoomable"
                        href="javascript:void(0)">
                        <BIconBriefcase class="mr-2 icon"></BIconBriefcase>
                        <small>Application Training</small>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center border-transparent zoomable"
                        href="javascript:void(0)">
                        <BIconBookmark class="mr-2 icon"></BIconBookmark>
                        <small>Bookmarked</small>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center border-transparent zoomable"
                        href="javascript:void(0)">
                        <BIconBell class="mr-2 icon"></BIconBell>
                        <small class="mr-2">Notifcations</small>
                        <b-badge variant="danger" pill>2</b-badge>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center border-transparent zoomable"
                        href="javascript:void(0)">
                        <!-- <BIconDiagram3 class="mr-2"></BIconDiagram3> -->
                        <div class="align-items-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-activity icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                            </svg>
                            <small>Activity Logs</small>
                        </div>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center border-transparent zoomable"
                        href="javascript:void(0)">
                        <BIconGear class="mr-2 icon"></BIconGear>
                        <small>Settings</small>
                    </b-list-group-item>

                    <small class="mt-3" style="font-size: 10px;">Copyright 2018 - 2023. All Rights Reserverd.</small>

                    <small style="font-size: 10px; color: #6a75fd"> Terms of Use ∘ Privacy Policy</small>
                </b-list-group>

                <b-container class="col-xl-10 pb-md-3 pl-md-5">
                    <b-collapse id="collapse-1">
                        <b-container fluid>
                            <!-- <b-row>
                                <b-alert variant="light" show dismissible>
                                    <h1>
                                        Welcome, Ian Tabz
                                    </h1>
                                    <small class="text-nowrap">
                                        You are almost done! To futher strengthen your profile, it is highly recommended for
                                        you
                                        to complete the 4 sections of your application.
                                    </small>
                                </b-alert>
                            </b-row> -->
                            <b-card class="shadow">
                                <b-card-title>
                                    Welcome, Ian Tabz
                                </b-card-title>
                                <small>
                                    <span style="color: green;">You are almost done!</span> To further strengthen your
                                    profile, it is highly recommended for
                                    you to complete the 4 sections of your application.
                                </small>
                            </b-card>
                            <b-card class="shadow mb-4">
                                <b-row>
                                    <b-col>
                                        <div class="d-flex align-items-center zoomable">
                                            <b-avatar variant="light" class="mr-3 icon" size="md"></b-avatar>
                                            <div>
                                                <small class="mb-1" style="font-size: 12px;">Applicant Profile</small>
                                                <b-progress :value="progress.applicant_profile"
                                                    class="mt-1 application_progress" height="4px"></b-progress>
                                            </div>
                                            <div class="ml-2" style="font-size: 11px;color:orange">
                                                {{ progress.applicant_profile }}%
                                            </div>
                                        </div>
                                    </b-col>

                                    <b-col>
                                        <div class="d-flex align-items-center zoomable">
                                            <b-avatar icon="b-icon-file-earmark-text" class="mr-3 icon" variant='light'
                                                font-scale="4"></b-avatar>
                                            <div>
                                                <small class="mb-1" style="font-size: 12px;"> Resume / CV</small>
                                                <b-progress :value="progress.resume" class="mt-1 resume_progress"
                                                    height="4px"></b-progress>
                                            </div>
                                            <div class="ml-2" style="font-size: 11px;color:red">
                                                {{ progress.resume }}%
                                            </div>
                                        </div>
                                    </b-col>


                                    <b-col>
                                        <div class="d-flex align-items-center zoomable">
                                            <b-avatar icon="b-icon-file-bar-graph" class="mr-3 icon" variant='light'
                                                font-scale="4"></b-avatar>
                                            <div>
                                                <small class="mb-1" style="font-size: 12px;"> Assessment Score</small>
                                                <b-progress :value="progress.assessment_score" class="mt-1 resume_progress"
                                                    height="4px"></b-progress>
                                            </div>
                                            <div class="ml-2" style="font-size: 11px;color:red">
                                                {{ progress.assessment_score }}%
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <div class="d-flex align-items-center zoomable">
                                            <b-avatar icon="b-icon-file-bar-graph" class="mr-3 icon" variant='light'
                                                font-scale="4"></b-avatar>
                                            <div>
                                                <small class="mb-1" style="font-size: 12px;"> Video Introduction</small>
                                                <b-progress :value="progress.video_introduction"
                                                    class="mt-1 resume_progress" height="4px"></b-progress>
                                            </div>
                                            <div class="ml-2" style="font-size: 11px;color:red">
                                                {{ progress.video_introduction }}%
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card>

                            <b-card class="shadow mb-5">
                                <b-row>
                                    <b-col style='border-right: 1px solid #dadada'>
                                        <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                                    </b-col>
                                    <b-col cols="10">
                                        <div>
                                            <b-card-title class="d-inline-block" style="font-size: 18px;">Ian Mark
                                                Tabaranza</b-card-title>
                                            <b-card-sub-title class="d-block">UI/UX Designer</b-card-sub-title>
                                            <b-card-sub-title class="d-inline-block mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                                    <path
                                                        d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                                                </svg>
                                                Bachelor of Science in Information Technology</b-card-sub-title>
                                            <b-col cols="10">
                                                <div class="d-flex align-items-center mt-2 mb-3">
                                                    <b-col cols="4">
                                                        <div class="d-flex align-items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" class="bi bi-briefcase-fill mr-2"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                                                <path
                                                                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                                            </svg>
                                                            <b-card-sub-title class="d-inline-block">7
                                                                years</b-card-sub-title>
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="4">
                                                        <div class="d-flex align-items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" class="bi bi-calendar-check mr-2"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                                <path
                                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                            </svg>
                                                            <b-card-sub-title
                                                                class="d-inline-block">Immediately</b-card-sub-title>
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="4">
                                                        <div class="d-flex align-items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" class="bi bi-coin mr-2"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                                                <path
                                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                <path
                                                                    d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                                            </svg>
                                                            <b-card-sub-title class="d-inline-block">
                                                                <span style="color: green;">Php
                                                                    35,000
                                                                </span></b-card-sub-title>
                                                        </div>
                                                    </b-col>
                                                </div>
                                            </b-col>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col style='border-top: 1px solid #dadada'>
                                        <div class="mt-5">
                                            <b-card-title class="d-inline-block" style="font-size: 18px;">General
                                                Details</b-card-title>
                                            <b-row class="row mb-3">
                                                <b-col><small>Date of Birth</small></b-col>
                                                <b-col><small>30 September 1995</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Gender
                                                    </small></b-col>
                                                <b-col><small>Male</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Civil Status</small></b-col>
                                                <b-col><small>Single</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Nationality</small></b-col>
                                                <b-col><small>Filipino</small></b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col style='border-top: 1px solid #dadada'>
                                        <div class="mt-5">
                                            <b-card-title class="d-inline-block" style="font-size: 18px;">Professional
                                                Status</b-card-title>
                                            <b-row class="row mb-3">
                                                <b-col><small>Recent Job Title</small></b-col>
                                                <b-col><small>Full Stack Web Developer </small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Interview Availability</small></b-col>
                                                <b-col>-</b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Current Monthly Gross</small></b-col>
                                                <b-col><small>Php 35,000</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Allowance (Non Taxable)</small></b-col>
                                                <b-col>-</b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Pre-employment Leaves</small></b-col>
                                                <b-col><small>30 September - Birthday</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Where can you work?</small></b-col>
                                                <b-col><small>Home</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Estimate Travel Time to Office</small></b-col>
                                                <b-col><small>2-3 hours</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Connection Type</small></b-col>
                                                <b-col><small>PLDT Fibr</small></b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col style='border-top: 1px solid #dadada'>
                                        <div class="mt-5">
                                            <b-card-title class="d-inline-block"
                                                style="font-size: 18px;">Preferences</b-card-title>
                                            <b-row class="row mb-3">
                                                <b-col><small>Day Shift</small></b-col>
                                                <b-col><small>8am - 5pm </small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Mid Shift</small></b-col>
                                                <b-col>-</b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Night Shift</small></b-col>
                                                <b-col>-</b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>English Only Policy (EOP)</small></b-col>
                                                <b-col>-</b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Where did you hear us?</small></b-col>
                                                <b-col><small>LinkedIn & Referred by my friend</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Marketing Permission</small></b-col>
                                                <b-col><small>Yes</small></b-col>
                                            </b-row>
                                            <b-row class="row mb-3">
                                                <b-col><small>Referral</small></b-col>
                                                <b-col><small>Patrick Ryan Cutor</small></b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-container>
                    </b-collapse>
                </b-container>
            </b-row>
        </b-container>
    </b-container>
</template>
<script>
import {
    BIconPerson, BIconFileEarmarkText, BIconFileBarGraph, BIconCollectionPlay, BIconBriefcase, BIconBookmark, BIconBell,
    // BIconDiagram3,
    BIconGear, BIconChevronRight, BIconChevronDown
} from 'bootstrap-vue'

export default {
    data() {
        return {
            isCollapsed: false,
            progress: {
                applicant_profile: 70,
                resume: 50,
                assessment_score: 0,
                video_introduction: 0
            }
        };
    },
    components: {
        BIconPerson, BIconFileEarmarkText, BIconFileBarGraph, BIconCollectionPlay, BIconBriefcase, BIconBookmark, BIconBell,
        // BIconDiagram3,
        BIconGear, BIconChevronRight, BIconChevronDown
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
}
</script>
<style>
.container {
    max-width: 1200px;
    height: 100vh;
}

.blue-purple-color {
    color: #6a75fd;
}

.underlined-border {
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 2px solid #b3b3b3;
}

.application_progress .progress-bar {
    background-color: orange;
}

.resume_progress .progress-bar {
    background-color: red;
}

.icon {
    transition: transform 0.3s ease-in-out;
}

.zoomable:hover .icon {
    transform: scale(1.5);
}
</style>
