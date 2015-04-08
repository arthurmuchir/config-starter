class nginx {
	file { '/var/www/app':
		ensure => 'link',
		target => '/vagrant',
	}

	package { 'nginx':
		ensure => 'present',
	}

	service { 'nginx':
		ensure => 'running',
		require => Package['nginx'],
	}

	file { 'vagrant-vhost':
		path => '/etc/nginx/sites-available/fast.dev',
		source => 'puppet:///modules/nginx/fast.dev',
		require => Package['nginx'],
	}

	file { 'default-nginx-disable':
		path => '/etc/nginx/sites-enabled/default',
		ensure => 'absent',
		require => Package['nginx'],
	}

	file { 'vagrant-nginx-enable':
		target => '/etc/nginx/sites-available/fast.dev',
		path => '/etc/nginx/sites-enabled/fast.dev',
		ensure => 'link',
		require => [
			File['vagrant-vhost'],
			File['default-nginx-disable'],
		],
		notify => Service['nginx'],
	}
}
