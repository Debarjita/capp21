import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EducationalHub = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('articles');

  const categories = [
    { key: 'articles', label: 'Articles', icon: '📰' },
    { key: 'videos', label: 'Videos', icon: '🎥' },
    { key: 'worksheets', label: 'Worksheets', icon: '📝' },
    { key: 'meditation', label: 'Meditation', icon: '🧘' },
  ];

  // Real articles from our research
  const articles = [
    {
      id: 1,
      title: 'Mental Health Trends in 2025: Addressing the Global Crisis',
      author: 'Medical Realities Team',
      readTime: '8 min read',
      category: 'Mental Health',
      image: require('./assets/Screenshot 2025-08-06 204536.png'),
      featured: true,
      url: 'https://medicalrealities.com/mental-health-trends-in-2025-addressing-the-global-crisis/',
      description: 'How global mental health is evolving in 2025—new data, digital tools, and policy shifts tackling an escalating crisis.',
    },
    {
      id: 2,
      title: 'Understanding Anxiety: 43% of Adults Feel More Anxious Than Last Year',
      author: 'American Psychiatric Association',
      readTime: '6 min read',
      category: 'Anxiety',
      image: require('./assets/Screenshot 2025-08-06 204629.png'),
      featured: true,
      url: 'https://www.psychiatry.org/news-room/news-releases/annual-poll-adults-express-increasing-anxiousness',
      description: 'Latest research shows anxiety levels rising, with current events being the primary trigger.',
    },
    {
      id: 3,
      title: 'Youth Mental Health: Supporting Children and Adolescents',
      author: 'World Economic Forum',
      readTime: '7 min read',
      category: 'Youth Mental Health',
      image: require('./assets/Screenshot 2025-08-06 204727.png'),
      featured: false,
      url: 'https://www.weforum.org/stories/2025/04/children-adolescent-mental-health-anxiety-depression/',
      description: '20% of adolescents report unmet mental health care needs. Learn how to help.',
    },
    {
      id: 4,
      title: 'COVID-19 Pandemic Triggers 25% Increase in Anxiety and Depression',
      author: 'World Health Organization',
      readTime: '5 min read',
      category: 'Depression',
      image: require('./assets/ci.png'),
      featured: false,
      url: 'https://www.who.int/news/item/02-03-2022-covid-19-pandemic-triggers-25-increase-in-prevalence-of-anxiety-and-depression-worldwide',
      description: 'WHO reports on the global mental health impact of the pandemic.',
    },
    {
      id: 5,
      title: '4 Imperatives for Improving Mental Health Care in 2025',
      author: 'World Economic Forum',
      readTime: '6 min read',
      category: 'Healthcare',
      image: require('./assets/ci.png'),
      featured: false,
      url: 'https://www.weforum.org/stories/2025/01/4-imperatives-for-improving-mental-health-care-in-2025/',
      description: 'Key strategies for addressing the global mental health crisis.',
    },
  ];

  // Real video content from YouTube and meditation experts
  const videos = [
    {
      id: 1,
      title: 'Breathing Exercises for Panic Attacks - NHS Guide',
      duration: '5:30',
      instructor: 'NHS Mental Health Team',
      views: '2.5M',
      thumbnail: require('./assets/Screenshot 2025-08-06 204802.png'),
      url: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/',
      description: 'Official NHS breathing technique for stress, anxiety and panic.',
    },
    {
      id: 2,
      title: 'UCLA Mindfulness Meditation - Getting Started',
      duration: '12:00',
      instructor: 'Diana Winston, UCLA',
      views: '4.1M',
      thumbnail: require('./assets/Screenshot 2025-08-06 204823.png'),
      url: 'https://www.uclahealth.org/uclamindful/guided-meditations',
      description: 'Free guided meditation from UCLA Mindful research center.',
    },
    {
      id: 3,
      title: 'Mayo Clinic Stress Reduction Meditation',
      duration: '8:15',
      instructor: 'Mayo Clinic Experts',
      views: '1.8M',
      thumbnail: require('./assets/Screenshot 2025-08-06 204841.png'),
      url: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/multimedia/meditation/vid-20084741',
      description: 'Professional guidance for immediate stress relief.',
    },
    {
      id: 4,
      title: 'Tara Brach - Mindfulness for Inner Peace',
      duration: '20:45',
      instructor: 'Dr. Tara Brach',
      views: '3.2M',
      thumbnail: require('./assets/ci.png'),
      url: 'https://www.tarabrach.com/guided-meditations/',
      description: 'Renowned psychologist and meditation teacher\'s free content.',
    },
  ];

  // Real worksheets from mental health organizations
  const worksheets = [
    {
      id: 1,
      title: 'NIMH Depression Assessment Worksheet',
      description: 'Self-assessment tool from National Institute of Mental Health',
      pages: 4,
      difficulty: 'Beginner',
      downloads: '125K',
      url: 'https://www.nimh.nih.gov/health/topics/depression',
      source: 'National Institute of Mental Health',
    },
    {
      id: 2,
      title: 'NHS Anxiety Self-Help Guide',
      description: 'Comprehensive anxiety management strategies and techniques',
      pages: 8,
      difficulty: 'Beginner',
      downloads: '89K',
      url: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/',
      source: 'UK National Health Service',
    },
    {
      id: 3,
      title: 'UCLA Mindfulness Practice Sheets',
      description: 'Evidence-based mindfulness exercises from UCLA research',
      pages: 6,
      difficulty: 'Intermediate',
      downloads: '76K',
      url: 'https://www.uclahealth.org/uclamindful/guided-meditations',
      source: 'UCLA Mindful Research Center',
    },
    {
      id: 4,
      title: 'WHO Mental Health Action Plan Toolkit',
      description: 'Global mental health improvement strategies and planning',
      pages: 12,
      difficulty: 'Advanced',
      downloads: '45K',
      url: 'https://www.who.int/publications/i/item/9789241506021',
      source: 'World Health Organization',
    },
    {
      id: 5,
      title: 'APA Stress Management Workbook',
      description: 'Professional techniques for managing daily stress',
      pages: 7,
      difficulty: 'Intermediate',
      downloads: '67K',
      url: 'https://www.apa.org/topics/stress',
      source: 'American Psychological Association',
    },
  ];

  // Real meditation apps and resources
  const meditations = [
    {
      id: 1,
      title: 'Insight Timer - 5-Minute Morning Boost',
      duration: '5:00',
      type: 'Guided Meditation',
      instructor: 'Sarah Blondin',
      plays: '2.4M',
      url: 'https://insighttimer.com/',
      description: 'Most popular free meditation app with 200K+ sessions',
    },
    {
      id: 2,
      title: 'Headspace - Breathing for Anxiety',
      duration: '10:30',
      type: 'Breathwork',
      instructor: 'Andy Puddicombe',
      plays: '5.1M',
      url: 'https://www.headspace.com/',
      description: 'Science-backed meditation for stress and anxiety relief',
    },
    {
      id: 3,
      title: 'Calm - Body Scan for Deep Sleep',
      duration: '25:00',
      type: 'Sleep Meditation',
      instructor: 'Tamara Levitt',
      plays: '8.9M',
      url: 'https://www.calm.com/',
      description: '#1 app for sleep and relaxation, clinically proven',
    },
    {
      id: 4,
      title: 'UCLA Mindful - Loving Kindness Practice',
      duration: '15:20',
      type: 'Compassion Practice',
      instructor: 'Diana Winston',
      plays: '1.2M',
      url: 'https://www.uclahealth.org/uclamindful/guided-meditations',
      description: 'Free research-based meditations from UCLA medical center',
    },
    {
      id: 5,
      title: 'NHS - Progressive Muscle Relaxation',
      duration: '18:45',
      type: 'Body Relaxation',
      instructor: 'NHS Therapists',
      plays: '945K',
      url: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/',
      description: 'Official UK healthcare system relaxation techniques',
    },
  ];

  const openLink = async (url, title) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Unable to open', `Cannot open ${title}. Please check your internet connection.`);
      }
    } catch (error) {
      Alert.alert('Link Error', `${title} will open in your browser when you have internet access.`);
    }
  };

  const handleContentTap = (content, type) => {
    Alert.alert(
      `Open ${type}: ${content.title}`,
      content.description || `${type} by ${content.author || content.instructor}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Open Link', 
          onPress: () => openLink(content.url, content.title)
        },
      ]
    );
  };

  const renderArticles = () => (
    <View>
      {/* Featured Articles */}
      <Text style={styles.sectionTitle}>🔥 Featured Mental Health Research</Text>
      {articles.filter(article => article.featured).map((article) => (
        <TouchableOpacity
          key={article.id}
          style={styles.featuredCard}
          onPress={() => handleContentTap(article, 'Article')}
        >
          <Image source={article.image} style={styles.featuredImage} />
          <View style={styles.featuredContent}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{article.category}</Text>
            </View>
            <Text style={styles.featuredTitle}>{article.title}</Text>
            <Text style={styles.articleDescription}>{article.description}</Text>
            <View style={styles.articleMeta}>
              <Text style={styles.authorText}>By {article.author}</Text>
              <Text style={styles.readTime}>{article.readTime}</Text>
            </View>
            <Text style={styles.tapToOpen}>Tap to open in browser →</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Recent Research */}
      <Text style={styles.sectionTitle}>📊 Latest Research & Reports</Text>
      {articles.filter(article => !article.featured).map((article) => (
        <TouchableOpacity
          key={article.id}
          style={styles.contentCard}
          onPress={() => handleContentTap(article, 'Article')}
        >
          <Image source={article.image} style={styles.contentImage} />
          <View style={styles.contentInfo}>
            <Text style={styles.contentTitle}>{article.title}</Text>
            <Text style={styles.contentDescription}>{article.description}</Text>
            <Text style={styles.contentMeta}>By {article.author} • {article.readTime}</Text>
            <View style={[styles.categoryBadge, styles.smallBadge]}>
              <Text style={[styles.categoryText, styles.smallCategoryText]}>{article.category}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderVideos = () => (
    <View>
      <Text style={styles.sectionTitle}>🎬 Professional Mental Health Videos</Text>
      <Text style={styles.sectionSubtitle}>From leading medical institutions and experts</Text>
      
      {videos.map((video) => (
        <TouchableOpacity
          key={video.id}
          style={styles.videoCard}
          onPress={() => handleContentTap(video, 'Video')}
        >
          <View style={styles.thumbnailContainer}>
            <Image source={video.thumbnail} style={styles.videoThumbnail} />
            <View style={styles.playButton}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>{video.duration}</Text>
            </View>
          </View>
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoDescription}>{video.description}</Text>
            <Text style={styles.videoMeta}>
              {video.instructor} • {video.views} views
            </Text>
            <Text style={styles.tapToOpen}>Tap to watch →</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderWorksheets = () => (
    <View>
      <Text style={styles.sectionTitle}>📋 Professional Mental Health Resources</Text>
      <Text style={styles.sectionSubtitle}>From leading medical and research institutions</Text>
      
      {worksheets.map((worksheet) => (
        <TouchableOpacity
          key={worksheet.id}
          style={styles.worksheetCard}
          onPress={() => handleContentTap(worksheet, 'Resource')}
        >
          <View style={styles.worksheetIcon}>
            <Text style={styles.worksheetIconText}>📝</Text>
          </View>
          <View style={styles.worksheetInfo}>
            <Text style={styles.worksheetTitle}>{worksheet.title}</Text>
            <Text style={styles.worksheetDescription}>{worksheet.description}</Text>
            <Text style={styles.worksheetSource}>Source: {worksheet.source}</Text>
            <View style={styles.worksheetMeta}>
              <Text style={styles.metaItem}>{worksheet.pages} pages</Text>
              <Text style={styles.metaItem}>{worksheet.difficulty}</Text>
              <Text style={styles.metaItem}>{worksheet.downloads} accessed</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.downloadButton}
            onPress={() => handleContentTap(worksheet, 'Resource')}
          >
            <Text style={styles.downloadText}>→</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderMeditation = () => (
    <View>
      <Text style={styles.sectionTitle}>🧘 Meditation & Mindfulness Apps</Text>
      <Text style={styles.sectionSubtitle}>Clinically-proven meditation resources</Text>
      
      {meditations.map((meditation) => (
        <TouchableOpacity
          key={meditation.id}
          style={styles.meditationCard}
          onPress={() => handleContentTap(meditation, 'Meditation App')}
        >
          <View style={styles.meditationIcon}>
            <Text style={styles.meditationIconText}>🧘</Text>
          </View>
          <View style={styles.meditationInfo}>
            <Text style={styles.meditationType}>{meditation.type}</Text>
            <Text style={styles.meditationTitle}>{meditation.title}</Text>
            <Text style={styles.meditationDescription}>{meditation.description}</Text>
            <View style={styles.meditationMeta}>
              <Text style={styles.metaItem}>{meditation.duration}</Text>
              <Text style={styles.metaItem}>{meditation.instructor}</Text>
              <Text style={styles.metaItem}>{meditation.plays} users</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.appButton}
            onPress={() => handleContentTap(meditation, 'Meditation App')}
          >
            <Text style={styles.appButtonText}>Open App</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Educational Hub</Text>
        <Text style={styles.headerSubtitle}>Evidence-based mental health resources</Text>
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.key}
              style={[
                styles.categoryTab,
                selectedCategory === category.key && styles.activeCategoryTab
              ]}
              onPress={() => setSelectedCategory(category.key)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={[
                styles.categoryLabel,
                selectedCategory === category.key && styles.activeCategoryLabel
              ]}>
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {selectedCategory === 'articles' && renderArticles()}
        {selectedCategory === 'videos' && renderVideos()}
        {selectedCategory === 'worksheets' && renderWorksheets()}
        {selectedCategory === 'meditation' && renderMeditation()}
        
        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            💡 All resources are from reputable medical institutions and mental health organizations. 
            For emergency mental health support, contact your local emergency services or crisis helpline.
          </Text>
        </View>
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
    backgroundColor: '#9C27B0',
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
    color: '#E1BEE7',
    marginTop: 5,
  },
  categoryContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  activeCategoryTab: {
    backgroundColor: '#9C27B0',
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeCategoryLabel: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  featuredCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  featuredContent: {
    padding: 15,
  },
  categoryBadge: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  smallBadge: {
    marginTop: 8,
    marginBottom: 0,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  smallCategoryText: {
    fontSize: 10,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  authorText: {
    fontSize: 14,
    color: '#666',
  },
  readTime: {
    fontSize: 14,
    color: '#9C27B0',
    fontWeight: '600',
  },
  tapToOpen: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: 'bold',
  },
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
  },
  contentImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  contentInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  contentDescription: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
  },
  contentMeta: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  videoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    overflow: 'hidden',
  },
  thumbnailContainer: {
    position: 'relative',
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 3,
  },
  durationBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  durationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  videoInfo: {
    padding: 15,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  videoDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  videoMeta: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  worksheetCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  worksheetIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F5E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  worksheetIconText: {
    fontSize: 24,
  },
  worksheetInfo: {
    flex: 1,
  },
  worksheetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  worksheetDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  worksheetSource: {
    fontSize: 12,
    color: '#9C27B0',
    fontWeight: '600',
    marginBottom: 8,
  },
  worksheetMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  metaItem: {
    fontSize: 12,
    color: '#666',
    marginRight: 15,
  },
  downloadButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  meditationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  meditationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  meditationIconText: {
    fontSize: 24,
  },
  meditationInfo: {
    flex: 1,
  },
  meditationType: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  meditationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  meditationDescription: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
  },
  meditationMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  appButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  appButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  disclaimer: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffc107',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#856404',
    lineHeight: 20,
  },
});

export default EducationalHub;