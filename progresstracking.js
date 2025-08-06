import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ProgressTracking = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock data - in real app, this would come from backend
  const progressData = {
    sessionsCompleted: 8,
    totalSessions: 12,
    moodAverage: 7.2,
    goalsCompleted: 5,
    totalGoals: 8,
    streakDays: 15,
    homeworkCompleted: 12,
    totalHomework: 15,
  };

  const achievements = [
    { id: 1, title: 'First Session', icon: '🎯', unlocked: true, date: '2 weeks ago' },
    { id: 2, title: '7-Day Streak', icon: '🔥', unlocked: true, date: '1 week ago' },
    { id: 3, title: 'Mood Tracker Master', icon: '📊', unlocked: true, date: '5 days ago' },
    { id: 4, title: 'Goal Crusher', icon: '💪', unlocked: false, progress: '5/8 goals' },
    { id: 5, title: 'Homework Hero', icon: '📚', unlocked: false, progress: '12/15 tasks' },
    { id: 6, title: '30-Day Warrior', icon: '👑', unlocked: false, progress: '15/30 days' },
  ];

  const goals = [
    { id: 1, title: 'Practice daily meditation', progress: 85, completed: true },
    { id: 2, title: 'Improve sleep schedule', progress: 60, completed: false },
    { id: 3, title: 'Reduce anxiety episodes', progress: 90, completed: true },
    { id: 4, title: 'Build social connections', progress: 40, completed: false },
    { id: 5, title: 'Exercise 3x per week', progress: 75, completed: false },
  ];

  const homeworkTasks = [
    { id: 1, title: 'Daily mood journal entry', dueDate: 'Today', completed: false },
    { id: 2, title: 'Practice breathing exercises', dueDate: 'Today', completed: true },
    { id: 3, title: 'Complete CBT worksheet', dueDate: 'Tomorrow', completed: false },
    { id: 4, title: 'Write gratitude list', dueDate: 'Tomorrow', completed: false },
  ];

  const renderProgressBar = (progress, color = '#4CAF50') => (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
  );

  const renderOverviewTab = () => (
    <View>
      {/* Stats Cards */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{progressData.sessionsCompleted}</Text>
          <Text style={styles.statLabel}>Sessions Completed</Text>
          <Text style={styles.statSubtext}>of {progressData.totalSessions} planned</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, { color: '#FF9800' }]}>{progressData.moodAverage}</Text>
          <Text style={styles.statLabel}>Avg Mood</Text>
          <Text style={styles.statSubtext}>This week</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, { color: '#2196F3' }]}>{progressData.streakDays}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
          <Text style={styles.statSubtext}>Keep it up! 🔥</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, { color: '#9C27B0' }]}>{progressData.goalsCompleted}</Text>
          <Text style={styles.statLabel}>Goals Reached</Text>
          <Text style={styles.statSubtext}>of {progressData.totalGoals} set</Text>
        </View>
      </View>

      {/* Weekly Mood Chart */}
      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Weekly Mood Trend</Text>
        <View style={styles.moodChart}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            const height = Math.random() * 80 + 20; // Mock data
            return (
              <View key={day} style={styles.chartBar}>
                <View style={[styles.moodBar, { height }]} />
                <Text style={styles.chartLabel}>{day}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📝</Text>
          <Text style={styles.actionText}>Log Mood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🎯</Text>
          <Text style={styles.actionText}>Add Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📚</Text>
          <Text style={styles.actionText}>View Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('EducationalHub')}
        >
          <Text style={styles.actionIcon}>🧠</Text>
          <Text style={styles.actionText}>Learn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderAchievementsTab = () => (
    <View>
      <Text style={styles.sectionTitle}>Your Achievements</Text>
      {achievements.map((achievement) => (
        <View key={achievement.id} style={[
          styles.achievementCard,
          !achievement.unlocked && styles.achievementLocked
        ]}>
          <Text style={styles.achievementIcon}>{achievement.icon}</Text>
          <View style={styles.achievementInfo}>
            <Text style={[
              styles.achievementTitle,
              !achievement.unlocked && styles.lockedText
            ]}>
              {achievement.title}
            </Text>
            <Text style={styles.achievementDate}>
              {achievement.unlocked ? `Unlocked ${achievement.date}` : achievement.progress}
            </Text>
          </View>
          {achievement.unlocked && (
            <Text style={styles.unlockedBadge}>✓</Text>
          )}
        </View>
      ))}
    </View>
  );

  const renderGoalsTab = () => (
    <View>
      <Text style={styles.sectionTitle}>Your Goals</Text>
      {goals.map((goal) => (
        <View key={goal.id} style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <Text style={[
              styles.goalTitle,
              goal.completed && styles.completedGoal
            ]}>
              {goal.title}
            </Text>
            <Text style={styles.goalProgress}>{goal.progress}%</Text>
          </View>
          {renderProgressBar(goal.progress, goal.completed ? '#4CAF50' : '#2196F3')}
          {goal.completed && <Text style={styles.completedText}>✓ Completed!</Text>}
        </View>
      ))}
      
      <TouchableOpacity style={styles.addGoalButton}>
        <Text style={styles.addGoalText}>+ Add New Goal</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHomeworkTab = () => (
    <View>
      <Text style={styles.sectionTitle}>Therapy Homework</Text>
      <View style={styles.homeworkStats}>
        <Text style={styles.homeworkStatsText}>
          Completed: {progressData.homeworkCompleted}/{progressData.totalHomework}
        </Text>
        {renderProgressBar((progressData.homeworkCompleted / progressData.totalHomework) * 100)}
      </View>
      
      {homeworkTasks.map((task) => (
        <View key={task.id} style={[
          styles.homeworkCard,
          task.completed && styles.completedHomework
        ]}>
          <TouchableOpacity style={styles.checkbox}>
            {task.completed && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <View style={styles.homeworkInfo}>
            <Text style={[
              styles.homeworkTitle,
              task.completed && styles.completedText
            ]}>
              {task.title}
            </Text>
            <Text style={styles.homeworkDue}>Due: {task.dueDate}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Progress Tracking</Text>
        <Text style={styles.headerSubtitle}>Track your mental health journey</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {[
          { key: 'overview', label: 'Overview' },
          { key: 'achievements', label: 'Badges' },
          { key: 'goals', label: 'Goals' },
          { key: 'homework', label: 'Tasks' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, selectedTab === tab.key && styles.activeTab]}
            onPress={() => setSelectedTab(tab.key)}
          >
            <Text style={[
              styles.tabText,
              selectedTab === tab.key && styles.activeTabText
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {selectedTab === 'overview' && renderOverviewTab()}
        {selectedTab === 'achievements' && renderAchievementsTab()}
        {selectedTab === 'goals' && renderGoalsTab()}
        {selectedTab === 'homework' && renderHomeworkTab()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#E3F2FD',
    marginTop: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#2196F3',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
  },
  statSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  chartSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  moodChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    paddingBottom: 20,
  },
  chartBar: {
    alignItems: 'center',
    flex: 1,
  },
  moodBar: {
    backgroundColor: '#4CAF50',
    width: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  chartLabel: {
    fontSize: 12,
    color: '#666',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#fff',
    width: '23%',
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  achievementCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  achievementLocked: {
    opacity: 0.5,
  },
  achievementIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  achievementDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  lockedText: {
    color: '#999',
  },
  unlockedBadge: {
    fontSize: 20,
    color: '#4CAF50',
  },
  goalCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  goalTitle: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  completedGoal: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  goalProgress: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
  completedText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 5,
  },
  addGoalButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  addGoalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeworkStats: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  homeworkStatsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  homeworkCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  completedHomework: {
    opacity: 0.7,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2196F3',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeworkInfo: {
    flex: 1,
  },
  homeworkTitle: {
    fontSize: 16,
    color: '#333',
  },
  homeworkDue: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default ProgressTracking;