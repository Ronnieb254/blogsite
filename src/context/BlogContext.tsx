import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  authorAvatar?: string;
  featured?: boolean;
  readTime: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  deletePost: (id: string) => void;
  getPost: (id: string) => BlogPost | undefined;
  getPreviewContent: (content: string) => string;
}

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Strategy',
    title: 'The Art of Building a Brand That Lasts',
    excerpt: 'Discover the key principles behind creating brand identities that stand the test of time.',
    content: `In today's fast-paced digital landscape, building a brand that endures is more challenging than ever. Yet, the fundamentals remain unchanged: authenticity, consistency, and emotional connection.

## Understanding Your Core Identity

The foundation of any lasting brand is a deep understanding of who you are and what you stand for. This goes beyond logos and color palettes—it's about defining your purpose, values, and the unique promise you make to your customers.

Start by asking yourself these fundamental questions:
- Why does your company exist beyond making money?
- What values drive your decisions?
- What makes you different from competitors?
- Who is your ideal customer, and what do they care about?

## The Power of Consistency

Consistency builds trust. When your brand looks, sounds, and feels the same across every touchpoint, you create a cohesive experience that customers can rely on. This doesn't mean being boring—it means having a clear set of guidelines that inform every decision.

Think about brands like Apple or Nike. You can recognize their communications instantly, not just because of their logos, but because of their consistent tone, visual style, and messaging.

## Building Emotional Connections

People don't buy products; they buy feelings, experiences, and identities. The most successful brands understand this and craft their messaging to resonate on an emotional level.

Share stories that matter. Show your human side. Let your customers see the people behind the brand and the values that drive you. When customers feel connected to your brand on an emotional level, they become advocates, not just buyers.

## Adapting Without Losing Yourself

The market changes, trends come and go, and customer expectations evolve. A lasting brand knows how to adapt while staying true to its core identity.

This balance requires careful consideration. Every change should be evaluated against your brand's fundamental values. Will this help us better serve our customers? Does this align with who we are?

## Measuring Brand Health

Building a lasting brand isn't just about creativity—it's also about measuring what matters. Track metrics like:
- Brand awareness and recognition
- Customer loyalty and retention
- Net Promoter Score
- Brand sentiment across channels

Regular measurement helps you understand what's working and what needs adjustment.

## Conclusion

Building a brand that lasts requires patience, consistency, and a deep commitment to your values. It's not about quick wins or following trends—it's about creating something meaningful that resonates with your audience for years to come.

Remember: your brand is not what you say it is. It's what your customers believe it to be. Focus on delivering consistent, authentic experiences, and your brand will stand the test of time.`,
    date: 'December 15, 2024',
    image: '/blog-1.jpg',
    author: 'Alexandra',
    authorAvatar: '/hero-portrait.jpg',
    featured: true,
    readTime: '8 min read',
  },
  {
    id: '2',
    category: 'Technology',
    title: '5 Digital Trends Shaping 2025',
    excerpt: 'Explore the emerging technologies and digital strategies that will define the next year.',
    content: `The digital landscape is evolving at an unprecedented pace. As we look toward 2025, several key trends are emerging that will reshape how businesses connect with their audiences.

## 1. AI-Powered Personalization

Artificial intelligence is no longer just a buzzword—it's becoming essential for delivering personalized experiences at scale. From chatbots that understand context to recommendation engines that predict what customers want before they know it themselves, AI is transforming how we engage with audiences.

The key is using AI to enhance human connection, not replace it. The most successful implementations will be those that feel natural and helpful, not intrusive.

## 2. Immersive Experiences with AR/VR

Augmented and virtual reality are moving beyond gaming into mainstream business applications. From virtual product try-ons to immersive brand experiences, these technologies are creating new ways for customers to interact with brands.

Expect to see more brands experimenting with AR filters, virtual showrooms, and immersive storytelling in 2025.

## 3. Voice and Conversational Interfaces

With the proliferation of smart speakers and voice assistants, optimizing for voice search and creating conversational experiences is becoming crucial. Brands need to think about how they sound, not just how they look.

This means developing voice-friendly content, creating skills for popular assistants, and ensuring your brand has a consistent voice across all channels.

## 4. Privacy-First Marketing

As privacy regulations tighten and consumers become more aware of data practices, successful brands will be those that build trust through transparency. First-party data strategies, consent-based marketing, and clear privacy policies will be competitive advantages.

The brands that thrive will be those that respect customer privacy while still delivering personalized experiences.

## 5. Sustainable and Purpose-Driven Branding

Consumers increasingly expect brands to stand for something beyond profit. Sustainability, social responsibility, and ethical practices are becoming key differentiators.

Authenticity is crucial here—customers can spot greenwashing from a mile away. Brands need to genuinely commit to their values and demonstrate that commitment through action.

## Preparing for the Future

Staying ahead of these trends requires a mindset of continuous learning and experimentation. The most successful brands will be those that:
- Stay curious about emerging technologies
- Listen closely to changing customer expectations
- Are willing to experiment and learn from failures
- Maintain a strong core identity while adapting to change

The future belongs to brands that can balance innovation with authenticity, technology with humanity, and growth with responsibility.`,
    date: 'December 10, 2024',
    image: '/blog-2.jpg',
    author: 'Alexandra',
    authorAvatar: '/hero-portrait.jpg',
    readTime: '6 min read',
  },
  {
    id: '3',
    category: 'Creative',
    title: 'The Power of Visual Storytelling',
    excerpt: 'How compelling visuals can transform your brand narrative and engage your audience.',
    content: `In an age of information overload, visual storytelling has become one of the most powerful tools for cutting through the noise and connecting with audiences. Here's how to harness its power for your brand.

## Why Visuals Matter

The human brain processes images 60,000 times faster than text. We're wired to respond to visual information—it's how we've communicated for most of human history. In the digital age, this means that strong visual storytelling can:

- Capture attention in a crowded feed
- Convey complex ideas quickly
- Create emotional connections
- Increase message retention
- Drive engagement and sharing

## The Elements of Visual Storytelling

Effective visual storytelling combines several key elements:

### 1. Authentic Imagery

Stock photos have their place, but authentic, original imagery creates stronger connections. Show real people, real moments, and real emotions. Your audience can tell the difference.

### 2. Consistent Visual Language

Your visuals should be instantly recognizable as yours. Develop a consistent approach to:
- Color palettes
- Photography style
- Typography
- Graphic elements
- Layout and composition

### 3. Emotional Resonance

The best visual stories make people feel something. Whether it's joy, nostalgia, inspiration, or empathy, emotion drives action. Think about what you want your audience to feel, then craft visuals that evoke that response.

### 4. Clear Narrative Arc

Even a single image can tell a story. Think about:
- What's the beginning, middle, and end?
- Who's the hero?
- What's the conflict or challenge?
- What's the resolution?

## Platforms and Formats

Different platforms call for different approaches:

### Instagram
- High-quality, visually striking images
- Consistent aesthetic
- Stories for behind-the-scenes content
- Reels for dynamic, engaging content

### LinkedIn
- Professional, polished visuals
- Infographics and data visualizations
- Carousel posts for storytelling

### Website
- Hero images that communicate your value proposition
- Product photography that shows benefits
- Team photos that humanize your brand

## Measuring Visual Impact

Track metrics like:
- Engagement rates
- Share rates
- Time spent on page
- Conversion rates
- Brand recall

Use these insights to refine your visual strategy over time.

## Conclusion

Visual storytelling isn't just about making things look good—it's about communicating your brand's essence in a way that resonates with your audience. Invest in developing a strong visual identity, and you'll create deeper connections that drive real business results.`,
    date: 'December 5, 2024',
    image: '/blog-3.jpg',
    author: 'Alexandra',
    authorAvatar: '/hero-portrait.jpg',
    readTime: '5 min read',
  },
  {
    id: '4',
    category: 'Strategy',
    title: 'Positioning Your Brand for Success',
    excerpt: 'Learn the fundamentals of brand positioning and how to differentiate yourself in a crowded market.',
    content: `In a world where consumers have more choices than ever, brand positioning is the key to standing out. It's not just about being different—it's about being different in a way that matters to your target audience.

## What is Brand Positioning?

Brand positioning is the space your brand occupies in the minds of your customers. It's how they perceive you relative to competitors. Strong positioning answers three key questions:

1. What makes you different?
2. Who is your target audience?
3. Why should they choose you?

## The Positioning Framework

### 1. Understand Your Market

Before you can position your brand, you need to understand the landscape:
- Who are your direct and indirect competitors?
- What positions do they occupy?
- Where are the gaps or opportunities?
- What do customers value most?

### 2. Define Your Differentiators

What makes you uniquely qualified to serve your audience? Consider:
- Your expertise and experience
- Your approach or methodology
- Your values and culture
- Your unique story

Be specific. "Great customer service" is vague. "24/7 support with 2-minute response times" is concrete and differentiating.

### 3. Know Your Audience

The best positioning resonates deeply with a specific audience. Create detailed customer personas that include:
- Demographics
- Psychographics
- Pain points and challenges
- Goals and aspirations
- Decision-making criteria

### 4. Craft Your Positioning Statement

A strong positioning statement follows this format:

"For [target audience], [brand name] is the [category] that [key benefit] because [reason to believe]."

Example: "For ambitious small business owners, BrandWise is the marketing consultancy that delivers Fortune 500 strategies at small business prices because we understand the unique challenges of growing companies."

## Common Positioning Pitfalls

### Trying to Be Everything to Everyone

The most successful brands focus on serving a specific audience exceptionally well rather than trying to appeal to everyone. Narrow focus creates stronger connections.

### Copying Competitors

If you're saying the same thing as everyone else, you're not positioning—you're blending in. Find your unique angle and own it.

### Making Claims Without Proof

Every positioning claim needs supporting evidence. If you say you're the most innovative, prove it with examples, awards, or customer testimonials.

## Living Your Positioning

Positioning isn't just a statement—it's a commitment that should inform every business decision:
- Product development
- Marketing and communications
- Customer service
- Hiring and culture
- Partnerships and collaborations

## Evolving Your Positioning

Markets change, competitors adapt, and customer needs evolve. Regularly review your positioning to ensure it remains relevant and differentiated.

## Conclusion

Strong brand positioning is the foundation of successful marketing. It clarifies who you are, who you serve, and why you're the best choice. Invest the time to get it right, and every other marketing decision becomes easier.`,
    date: 'November 28, 2024',
    image: '/blog-2.jpg',
    author: 'Alexandra',
    authorAvatar: '/hero-portrait.jpg',
    readTime: '7 min read',
  },
  {
    id: '5',
    category: 'Business',
    title: 'Scaling Your Brand Internationally',
    excerpt: 'Key considerations and strategies for taking your brand to global markets successfully.',
    content: `Expanding your brand internationally is an exciting milestone, but it comes with unique challenges. Here's how to navigate the complexities of global brand expansion.

## Before You Expand

### Validate Market Demand

Don't assume what works in one market will work in another. Conduct thorough research:
- Is there genuine demand for your product or service?
- Who are the local competitors?
- What are the price expectations?
- What distribution channels are available?

### Understand Cultural Nuances

Culture shapes how people perceive and interact with brands. Consider:
- Language and communication styles
- Color symbolism and visual preferences
- Values and social norms
- Purchase behaviors and decision-making processes

What resonates in one culture may fall flat—or worse, offend—in another.

## Adapting Your Brand

### The Global-Local Balance

Successful international brands find the right balance between global consistency and local relevance:

**Global Elements (Keep Consistent):**
- Core brand values and mission
- Visual identity fundamentals
- Brand voice and personality
- Quality standards

**Local Elements (Adapt):**
- Messaging and positioning
- Product features or offerings
- Marketing channels and tactics
- Customer service approaches

### Localization vs. Translation

Translation converts words from one language to another. Localization adapts content to feel native to the local culture. Invest in professional localization for:
- Website content
- Marketing materials
- Product information
- Customer support

## Building Local Presence

### Partnership Strategies

Consider partnering with local businesses that understand the market:
- Distributors and retailers
- Marketing agencies
- Local influencers
- Industry associations

### Hiring Local Talent

Local team members bring invaluable insights:
- Cultural understanding
- Language skills
- Local network and relationships
- Knowledge of regulations and business practices

## Legal and Regulatory Considerations

### Intellectual Property

Protect your brand in each market:
- Trademark registration
- Domain name acquisition
- Patent protection (if applicable)

### Compliance

Understand and comply with local regulations:
- Data privacy laws (GDPR, etc.)
- Advertising standards
- Product safety requirements
- Import/export regulations

## Marketing Your Brand Globally

### Digital Strategy

- Localize your website with country-specific domains or subdomains
- Optimize for local search engines
- Adapt social media strategy for local platforms
- Consider time zones for content scheduling

### Content Marketing

- Create locally relevant content
- Feature local customers and case studies
- Address local pain points and challenges
- Collaborate with local creators and influencers

## Measuring Success

Track metrics that matter in each market:
- Brand awareness and recognition
- Market share
- Customer acquisition cost
- Customer lifetime value
- Local engagement rates

Compare performance across markets to identify what's working and what needs adjustment.

## Common Mistakes to Avoid

1. **Assuming one size fits all** - What works at home may not work abroad
2. **Underestimating costs** - International expansion requires significant investment
3. **Moving too fast** - Take time to understand each market before scaling
4. **Neglecting local competition** - Local players often have deep market knowledge
5. **Ignoring feedback** - Listen to local customers and adapt accordingly

## Conclusion

International expansion is a significant undertaking that requires careful planning, cultural sensitivity, and willingness to adapt. But for brands that get it right, the rewards can be substantial—new customers, increased revenue, and enhanced global reputation.

Take the time to do it right, and your brand can thrive on the global stage.`,
    date: 'November 20, 2024',
    image: '/blog-1.jpg',
    author: 'Alexandra',
    authorAvatar: '/hero-portrait.jpg',
    readTime: '9 min read',
  },
  {
    id: '6',
    category: 'Creative',
    title: 'Design Systems That Scale',
    excerpt: 'Building flexible design systems that grow with your organization and maintain consistency.',
    content: `A well-designed design system is the backbone of consistent, scalable brand experiences. Here's how to build one that grows with your organization.

## What is a Design System?

A design system is a comprehensive set of standards, documentation, and reusable components that help teams create consistent user experiences. It includes:

- Visual design elements (colors, typography, spacing)
- UI components (buttons, forms, cards)
- Design principles and guidelines
- Code implementations
- Documentation and best practices

## Why Design Systems Matter

### Consistency

Design systems ensure that every touchpoint feels like it comes from the same brand. This builds trust and recognition with users.

### Efficiency

Teams don't have to reinvent the wheel for every project. Reusable components speed up design and development.

### Scalability

As your organization grows, a design system helps maintain quality and consistency across more products, teams, and markets.

### Collaboration

Shared language and resources improve communication between designers, developers, and stakeholders.

## Building Your Design System

### 1. Start with Principles

Define the core principles that guide all design decisions:
- What should every experience feel like?
- What are your non-negotiables?
- How do you balance consistency with flexibility?

Example principles:
- "Clarity over cleverness"
- "Accessible to everyone"
- "Efficient but delightful"

### 2. Audit Existing Work

Before building, understand what you have:
- Inventory current components and patterns
- Identify inconsistencies
- Note what's working well
- Document common use cases

### 3. Define Your Foundation

Establish the core visual elements:

**Color System**
- Primary, secondary, and accent colors
- Semantic colors (success, error, warning)
- Color usage guidelines
- Accessibility requirements

**Typography**
- Font families and weights
- Type scale for headings and body text
- Line heights and spacing
- Responsive typography rules

**Spacing and Layout**
- Base unit (usually 4px or 8px)
- Spacing scale
- Grid system
- Breakpoint definitions

### 4. Build Components

Create reusable components that follow your foundation:
- Start with the most used (buttons, inputs, cards)
- Document usage guidelines
- Include variations (sizes, states)
- Provide code implementations

### 5. Create Documentation

Good documentation makes a design system usable:
- Clear explanations with examples
- Do's and don'ts
- Usage guidelines
- Code snippets
- Design rationale

## Maintaining Your Design System

### Governance

Establish clear ownership and processes:
- Who can contribute?
- How are changes reviewed?
- What's the release process?
- How do you handle feedback?

### Evolution

Design systems should evolve with your needs:
- Regular reviews and updates
- Version control
- Deprecation processes
- Communication of changes

### Adoption

A design system is only valuable if people use it:
- Training and onboarding
- Easy-to-access documentation
- Integration with tools (Figma, Storybook)
- Regular communication about updates

## Measuring Success

Track metrics like:
- Adoption rate across teams
- Time saved in design/development
- Consistency scores
- User satisfaction
- Reduction in design debt

## Common Challenges

### Resistance to Change

Some teams may resist adopting a design system. Address this by:
- Involving them in the creation process
- Showing clear benefits
- Providing excellent documentation
- Offering training and support

### Over-Engineering

Don't try to solve every possible use case upfront. Start simple and evolve based on real needs.

### Lack of Maintenance

A design system requires ongoing investment. Ensure you have resources dedicated to maintenance and evolution.

## Conclusion

A well-crafted design system is a powerful tool for creating consistent, scalable brand experiences. It requires upfront investment but pays dividends in efficiency, quality, and team alignment. Start with principles, build incrementally, and commit to ongoing maintenance for long-term success.`,
    date: 'November 15, 2024',
    image: '/blog-3.jpg',
    author: 'Alexandra',
    authorAvatar: '/hero-portrait.jpg',
    readTime: '8 min read',
  },
];

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      try {
        setPosts(JSON.parse(savedPosts));
      } catch {
        setPosts(DEFAULT_POSTS);
        localStorage.setItem('blog_posts', JSON.stringify(DEFAULT_POSTS));
      }
    } else {
      setPosts(DEFAULT_POSTS);
      localStorage.setItem('blog_posts', JSON.stringify(DEFAULT_POSTS));
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('blog_posts', JSON.stringify(posts));
    }
  }, [posts]);

  const addPost = (post: Omit<BlogPost, 'id' | 'date'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const getPost = (id: string) => {
    return posts.find(post => post.id === id);
  };

  // Get preview content (first ~30% of content)
  const getPreviewContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    const previewParagraphs = Math.max(2, Math.ceil(paragraphs.length * 0.3));
    return paragraphs.slice(0, previewParagraphs).join('\n\n');
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        deletePost,
        getPost,
        getPreviewContent,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
