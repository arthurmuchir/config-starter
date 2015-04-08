class mail {
	package { ['build-essential', 'gcc', 'libsqlite3-dev', 'ruby1.9.1-dev']:
		ensure => 'present',
		before => Package['mailcatcher'],
	}

	package { 'mailcatcher':
		ensure => 'present',
		provider => 'gem',
	}
}
