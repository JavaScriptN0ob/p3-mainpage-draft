import React from "react";
import { TaskerCard } from "./TaskerCard/TaskerCard";
import styles from "./MeetTasker.module.scss";

export const MeetTasker = (props) => (
  <div className={styles.tasker}>
    <div className={styles.title}> Meet some Taskers!</div>
    <div className={styles.content}>
      Discover the story behind the people that are making the Airtasker
      community great, how and why they do what they do.
    </div>
    <h2>Samantha Emily Brendan</h2>
    <TaskerCard />
    <button className={styles.taskerButton}>Become a Tasker</button>
  </div>
);
